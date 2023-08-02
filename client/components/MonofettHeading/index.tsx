import React from "react";
import styles from "./style.module.scss";
import { wordArray } from "../../utils/wordArray";

const MonofettHeading = ({ words }: { words: string[] }) => {
  return (
    <h1 className="d-flex flex-column flex-lg-row gap-lg-5 justify-content-center align-items-center py-5">
      {words.map((word) => {
        return (
          <div className="d-flex justify-content-between gap-2 gap-md-3">
            {wordArray(word).map((alpha) => {
              return (
                <div className={`${styles.heading_alpha} Monofett`}>
                  {alpha}
                </div>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
};

export default MonofettHeading;
