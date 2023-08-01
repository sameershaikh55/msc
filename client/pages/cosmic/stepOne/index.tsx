import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import CosmicHeaing from "../../../components/CosmicHeading";

const CosmicStepOne:React.FC = () => {
  const cosmicFeelings = [
    {
      title: "Disgust",
      picture: "/assets/cosmicStepOne/image1.png",
    },
    {
      title: "Sadness",
      picture: "/assets/cosmicStepOne/image4.png",
    },
    {
      title: "Fear",
      picture: "/assets/cosmicStepOne/image5.png",
    },
    {
      title: "Happiness",
      picture: "/assets/cosmicStepOne/image2.png",
    },
  ];

  return (
    <div className={styles.page_container}>
      <div className={styles.cosmic_container}>
        <CosmicHeaing heading="Cosmic Feelings" />

        <div className={`${styles.body} row`}>
          {cosmicFeelings.map((cosmic) => {
            return (
              <div className={`${styles.cosmic_card} col-3`}>
                <img src={cosmic.picture} alt="" />
                <div className={styles.white_box}></div>
                <h1 className="text-center Mogra">{cosmic.title}</h1>
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Link href="/cosmic/stepTwo/">
            <button className="Londrina f28">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CosmicStepOne;
