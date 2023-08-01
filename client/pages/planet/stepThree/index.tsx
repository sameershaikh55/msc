import React from "react";
import styles from "./style.module.scss";
import CosmicHeading from "../../../components/CosmicHeading";
import DetailedQuestion from "../../../components/DetailedQuestion";

const PlanetStepThree: React.FC = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.cosmic_container}>
        <CosmicHeading />

        <DetailedQuestion
          picture="/assets/planetStepThree.png"
          options={["Overjoyed", "Sad", "Confused", "Angry"]}
          question="Why could she be feeling like that?"
          title="What is the Mother feeling?"
          next="/planet/stepFour"
        />
      </div>
    </div>
  );
};

export default PlanetStepThree;
