import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const PersonalDetails:React.FC = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.detail_container}>
        <h1 className="text-center">Progress</h1>
      </div>
    </div>
  );
};

export default PersonalDetails;
