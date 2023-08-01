import React from "react";
import styles from "./style.module.scss";
import CosmicHeading from "../../../components/CosmicHeading";
import DetailedQuestion from "../../../components/DetailedQuestion";

const PlanetStepOne: React.FC = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.cosmic_container}>
        <CosmicHeading />

        <DetailedQuestion
          picture="/assets/planetStepOne.png"
          options={["Happy", "Sad", "Shocked", "Angry"]}
          question="Why could she be feeling like that?"
          title="What is the girl feeling?"
          next="/planet/stepTwo"
        />
      </div>
    </div>
  );
};

export default PlanetStepOne;
