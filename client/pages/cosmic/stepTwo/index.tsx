import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import CosmicHeaing from "../../../components/CosmicHeading";

const CosmicStepTwo: React.FC = () => {
  const cosmicFeelings = [
    {
      title: "Shy",
      picture: "/assets/cosmicStepTwo/image6.png",
    },
    {
      title: "Suprise",
      picture: "/assets/cosmicStepTwo/image8.png",
    },
    {
      title: "Anger",
      picture: "/assets/cosmicStepTwo/image7.png",
    },
    {
      title: "Confused",
      picture: "/assets/cosmicStepTwo/image3.png",
    },
  ];

  return (
    <div className={styles.page_container}>
      <div className={styles.cosmic_container}>
        <CosmicHeaing />

        <div className="container-fluid">
          <div className={`${styles.body} row gy-4`}>
            {cosmicFeelings.map((cosmic) => {
              return (
                <div
                  className={`${styles.cosmic_card} col-8 mx-auto col-sm-6 col-md-3`}
                >
                  <img src={cosmic.picture} alt="" />
                  <div className={styles.white_box}></div>
                  <h1 className="text-center Mogra">{cosmic.title}</h1>
                </div>
              );
            })}
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5 pb-5 pb-md-0">
          <Link href="/cosmic/done/">
            <button className="Londrina f28">Finish!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CosmicStepTwo;
