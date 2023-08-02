import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { Props } from "./types";
import ReadOutLoud from "../ReadOutLoud";

const CosmicHeading: React.FC<Props> = ({
  heading,
  font = "Monoton text-yellow",
}) => {
  return (
    <div className={styles.cosmic_heading}>
      <Link href="/account">
        <img className={styles.home} src="/assets/home.svg" alt="" />
      </Link>
      {heading && <h1 className={`${font} text-center mb-0`}>{heading}</h1>}
      <ReadOutLoud button={<img src="/assets/sound.svg" alt="" />} />
    </div>
  );
};

export default CosmicHeading;
