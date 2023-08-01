import React from "react";
import styles from "./style.module.scss";
import { Props } from "./types";
import Link from "next/link";

const DetailedQuestion: React.FC<Props> = ({
  options,
  picture,
  question,
  title,
  next,
  btnText = "Next",
}) => {
  return (
    <div className={`${styles.cosmic_body} row`}>
      <div className="col-6">
        <h2 className="text-white text-center letterspace">{title}</h2>
        <div className={styles.white_box}></div>
        <div className="row gy-3 mt-4">
          {options.map((option) => {
            return (
              <div className="col-6 text-white f26 text-center letterspace">
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-6">
        <img className="w-100" src={picture} alt="" />
      </div>

      <div className="col-10">
        <h2 className="text-white mb-4 f26 letterspace">{question}</h2>
        <textarea name="" id="" className="w-100" rows={3}></textarea>
      </div>

      <div className="col-12">
        <Link href={next} className="text-decoration-none">
          <div className={`d-flex justify-content-center mt-5`}>
            <button className="Londrina f22">{btnText}</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DetailedQuestion;
