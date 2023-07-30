import React from "react";
import styles from "./style.module.scss";
import { wordArray } from "../../utils/wordArray";

const Heading = ({ word }: { word: string }) => {
  console.log(wordArray(word), "word");

  return (
    <div className={styles.hero_container}>
      <h1 className="d-flex justify-content-center gap-3 py-4">
        {wordArray(word).map((alpha) => {
          return (
            <div className={`${styles.heading_alpha} Monofett`}>{alpha}</div>
          );
        })}
      </h1>
    </div>
  );
};

export default Heading;
