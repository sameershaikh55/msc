import React, { useState } from "react";
import styles from "./style.module.scss";
import { Props } from "./types";
import Link from "next/link";
import DraggableItem from "../DraggableItem";
import DropTarget from "../DropTarget";

const DetailedQuestion: React.FC<Props> = ({
  options,
  picture,
  question,
  title,
  next,
  btnText = "Next",
}) => {
  const [items, setItems] = useState<string[]>([...options]);
  const [droppedItems, setDroppedItems] = useState<string>("");

  const handleDrop = (itemId: string) => {
    setDroppedItems(itemId);
  };

  return (
    <div className="container-fluid">
      <div className={`${styles.cosmic_body} row gy-5`}>
        <div className="col-12 col-md-6">
          <h2 className="text-white text-center letterspace">{title}</h2>

          <div className={styles.white_box}>
            <DropTarget onDrop={handleDrop}>
              <div className={`${styles.targeted} text-center`}>
                {droppedItems}
              </div>
            </DropTarget>
          </div>

          <div className="row gy-3 mt-4">
            {items.map((option) => {
              return (
                <DraggableItem id={option.toLowerCase()} name={option} planet />
              );
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
          <Link href={next} className="text-decoration-none">
            <div className={`d-flex justify-content-center mt-5 mb-5 mb-md-0`}>
              <button className="Londrina f22">{btnText}</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailedQuestion;
