import React, { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import CosmicHeaing from "../../../components/CosmicHeading";
import DraggableItem from "../../../components/DraggableItem";
import DropTarget from "../../../components/DropTarget";
import { Item, ItemDropped } from "./types";

const CosmicStepOne: React.FC = () => {
  const correctPattern = ["Happiness", "Disgust", "Fear", "Sadness"];

  const cosmicFeelings = [
    {
      title: "Disgust",
      picture: "/assets/cosmicStepOne/image1.png",
    },
    {
      title: "Sadness",
      picture: "/assets/cosmicStepOne/image4.png",
    },
    {
      title: "Fear",
      picture: "/assets/cosmicStepOne/image5.png",
    },
    {
      title: "Happiness",
      picture: "/assets/cosmicStepOne/image2.png",
    },
  ];

  const [items, setItems] = useState<Item[]>([...cosmicFeelings]);
  const [droppedItems, setDroppedItems] = useState<ItemDropped[] | []>([]);

  const handleDrop = (itemId: string, index: number | undefined) => {
    setDroppedItems((prevItems) => [
      ...prevItems,
      { id: itemId, index: index },
    ]);
    const itemsFilter = items.map((prev) =>
      prev.title === itemId ? { ...prev, title: "" } : { ...prev }
    );
    setItems(itemsFilter);
  };

  return (
    <div className={styles.page_container}>
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
                        style={{ height: "47px" }}
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

        <div className="d-flex justify-content-center mt-5 pb-5 pb-md-0">
          <Link href="/cosmic/stepTwo/">
            <button className="Londrina f28">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CosmicStepOne;
