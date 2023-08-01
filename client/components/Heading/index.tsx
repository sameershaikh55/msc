import React from "react";
import styles from "./style.module.scss";
import { wordArray } from "../../utils/wordArray";
import { Props } from "./types";
import Link from "next/link";

const Heading: React.FC<Props> = ({ word, icon = true, exit = false }) => {
  return (
    <div className={styles.hero_container}>
      <h1 className="d-flex justify-content-center gap-3 py-4 position-relative">
        {icon && (
          <Link className={styles.home_button} href="/account">
            <img src="/assets/home.svg" alt="" />
          </Link>
        )}
        {wordArray(word).map((alpha, i) => {
          return (
            <div key={i} className={`${styles.heading_alpha} Monofett`}>
              {alpha}
            </div>
          );
        })}
        {exit && (
          <Link className={styles.exit_button} href="/account">
            <img src="/assets/exit.svg" alt="" />
          </Link>
        )}
      </h1>
    </div>
  );
};

export default Heading;
