import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const PersonalDetails:React.FC = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.detail_container}>
        <h1 className="text-center">
          Personal <br /> Details
        </h1>

        <div className={styles.details_inside_container}>
          <div className="row gy-5">
            <div className="col-6">
              <h1 className="text-white">First name:</h1>
            </div>
            <div className="col-6"></div>
            <div className="col-6">
              <h1 className="text-white">Surname:</h1>
            </div>
            <div className="col-6"></div>
            <div className="col-6">
              <h1 className="text-white">Email address:</h1>
            </div>
            <div className="col-6"></div>
            <div className="col-6">
              <h1 className="text-white">Password:</h1>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
