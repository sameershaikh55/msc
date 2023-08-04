import React, { useState } from "react";
import styles from "./style.module.scss";
import { Props } from "./types";
import Link from "next/link";
import DraggableItem from "../DraggableItem";
import DropTarget from "../DropTarget";
import { getCookie } from "@/utils/getCookies";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { updateGame } from "@/store/actions/game";

const DetailedQuestion: React.FC<Props> = ({
  options,
  picture,
  question,
  title,
  next,
  btnText = "Next",
  correctPattern,
}) => {
  const cookieValue = getCookie("token");
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const [items, setItems] = useState<string[]>([...options]);
  const [droppedItems, setDroppedItems] = useState<string>("");

  const handleDrop = (itemId: string) => {
    setDroppedItems(itemId);

    const type = correctPattern === itemId ? "correct" : "wrong";
    dispatch(updateGame({ name: "planet", type }, cookieValue));
  };

  const reset = () => {
    setItems([...options]);
    setDroppedItems("");
  };

  return (
    <div className="container-fluid">
      <div className={`${styles.cosmic_body} row gy-5`}>
        <div className="col-12 col-md-6">
          <h2 className="text-white text-center letterspace">{title}</h2>

          <div
            style={{
              background:
                droppedItems === correctPattern
                  ? "green"
                  : droppedItems && "red",
            }}
            className={styles.white_box}
          >
            <DropTarget onDrop={handleDrop}>
              <div className={`${styles.targeted} text-center`}>
                {droppedItems}
              </div>
            </DropTarget>
          </div>

          <div className="row gy-3 mt-4">
            {items.map((option) => {
              if (droppedItems !== option)
                return <DraggableItem id={option} name={option} planet />;
              else return <DraggableItem id={""} name={""} planet />;
            })}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-10 col-md-12 mx-auto">
              <img className="w-100" src={picture} alt="" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10">
          <h2 className="text-white mb-4 f26 letterspace">{question}</h2>
          <textarea name="" id="" className="w-100" rows={3}></textarea>
        </div>

        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center mt-5 pb-5 pb-md-0 gap-3">
            <Link href={next} className="text-decoration-none">
              <button
                disabled={droppedItems === correctPattern ? false : true}
                className="Londrina f28"
              >
                {btnText}
              </button>
            </Link>
            <button onClick={reset} className={`${styles.reset} Londrina f20`}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedQuestion;
