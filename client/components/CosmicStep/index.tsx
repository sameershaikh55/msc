import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import CosmicHeaing from "../../components/CosmicHeading";
import DraggableItem from "../../components/DraggableItem";
import DropTarget from "../../components/DropTarget";
import { Item, ItemDropped, Props } from "./types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { updateGame } from "@/store/actions/game";
import { getCookie } from "@/utils/getCookies";
import { getSettings } from "@/store/actions/settings";
import { RootState } from "../AuthWrapper/types";
import Loader from "../Loader";

const CosmicStep: React.FC<Props> = ({
  correctPattern,
  cosmicFeelings,
  btn,
}) => {
  const cookieValue = getCookie("token");
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const [items, setItems] = useState<Item[]>([...cosmicFeelings]);
  const [droppedItems, setDroppedItems] = useState<ItemDropped[] | []>([]);

  const { settings, loading } = useSelector(
    (state: RootState) => state.settings
  );

  useEffect(() => {
    if (cookieValue) {
      dispatch(getSettings(cookieValue));
    }
  }, [cookieValue]);

  const handleDrop = (itemId: string, index: number | undefined) => {
    setDroppedItems((prevItems) => [
      ...prevItems,
      { id: itemId, index: index },
    ]);
    const itemsFilter = items.map((prev) =>
      prev.title === itemId ? { ...prev, title: "" } : { ...prev }
    );
    setItems(itemsFilter);

    const type =
      correctPattern.findIndex((item) => item === itemId) === index
        ? "correct"
        : "wrong";
    dispatch(updateGame({ name: "cosmic", type }, cookieValue));
  };

  const reset = () => {
    setItems([...cosmicFeelings]);
    setDroppedItems([]);
  };

  const droppedIndexes = droppedItems.map((item) => item.index);
  const isPatternCorrect = droppedIndexes.every(
    (index, i) => index === correctPattern.indexOf(droppedItems[i].id)
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{ background: settings && settings.background }}
      className={styles.page_container}
    >
      <div className={styles.cosmic_container}>
        <CosmicHeaing heading="Cosmic Feelings" />

        <div className="container-fluid">
          <div className={`${styles.body} row gy-4`}>
            {items.map((cosmic, i) => {
              return (
                <div
                  className={`${styles.cosmic_card} col-8 mx-auto col-sm-6 col-md-3`}
                >
                  <img src={cosmic.picture} alt="" />

                  <br />

                  <div className={styles.white_box}>
                    <DropTarget onDrop={handleDrop} index={i}>
                      {droppedItems.map((itemId) => {
                        if (itemId.index === i) {
                          return (
                            <div
                              className={styles.white_box}
                              style={{
                                background:
                                  correctPattern.findIndex(
                                    (item) => item === itemId.id
                                  ) === i
                                    ? "green"
                                    : "red",
                              }}
                            >
                              <div
                                key={itemId.id}
                                className={`${styles.targeted} text-center`}
                              >
                                {itemId.id}
                              </div>
                            </div>
                          );
                        }
                      })}
                    </DropTarget>
                  </div>
                  <DraggableItem
                    id={cosmic.title}
                    name={
                      <h1
                        style={{
                          height: "47px",
                          fontSize: settings && settings.font,
                        }}
                        className="text-center Mogra"
                      >
                        {cosmic.title}
                      </h1>
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-5 pb-5 pb-md-0 gap-3">
          <Link href={btn.link}>
            <button
              disabled={
                droppedItems.length === correctPattern.length &&
                isPatternCorrect
                  ? false
                  : true
              }
              className="Londrina f28"
            >
              {btn.text}
            </button>
          </Link>
          <button onClick={reset} className={`${styles.reset} Londrina f22`}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CosmicStep;
