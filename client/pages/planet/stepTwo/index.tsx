import React from "react";
import styles from "./style.module.scss";
import CosmicHeading from "../../../components/CosmicHeading";
import DetailedQuestion from "../../../components/DetailedQuestion";

const PlanetStepTwo: React.FC = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.cosmic_container}>
        <CosmicHeading />

        <DetailedQuestion
          picture="/assets/planetStepTwo.png"
          options={["Sleepy", "Frustrated", "Confused", "Sneaky"]}
          question="Why could she be feeling like that?"
          title="What is the woman feeling?"
          next="/planet/stepThree"
        />
      </div>
    </div>
  );
};

export default PlanetStepTwo;
