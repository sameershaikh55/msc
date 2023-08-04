import React from "react";
import styles from "./style.module.scss";
import CosmicHeading from "../../../components/CosmicHeading";
import DetailedQuestion from "../../../components/DetailedQuestion";

const PlanetStepFour: React.FC = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.cosmic_container}>
        <CosmicHeading />

        <DetailedQuestion
          correctPattern={"Anxious"}
          title="What is the boy feeling?"
          options={["Excited", "Shy", "Suprised", "Anxious"]}
          question="Why could he be feeling like that?"
          next="/planet/done"
          btnText="Finish"
          picture="/assets/planetStepFour.png"
        />
      </div>
    </div>
  );
};

export default PlanetStepFour;
