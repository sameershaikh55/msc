import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import CosmicHeading from "../../../components/CosmicHeading";
import { Player } from "@lottiefiles/react-lottie-player";

const CosmicStart: React.FC = () => {
  return (
    <div className={styles.page_container}>
      <Player
        autoplay
        loop
        src="/assets/Animations/falling_stars/stars-7035894.json"
        className={styles.animation}
      ></Player>

      <div className={styles.cosmic_container}>
        <CosmicHeading heading="Well Done!!" />

        <div className="container-fluid">
          <div className={`${styles.cosmic_body} row align-items-center`}>
            <div className="col-12">
              <p className={`${styles.welcome_text} Aoboshi text-white mb-5`}>
                "ZibZibZabble! You've done an amazing job, space explorer!
                You've successfully completed this level and helped ZabbleZib
                understand human emotions better. Your journey through the
                galaxy of FizzlFizz is making a big difference. Get ready to
                embark on the next exciting level in Cosmic Emotions. Keep up
                the fantastic effort!"
              </p>
            </div>
            <div className="col-12 col-md-3 my-5 my-md-0 order-1 order-md-0">
              <img className="w-100" src="/assets/wellDoneAlien.svg" alt="" />
            </div>
            <div className="col-12 col-md-9">
              <p
                className={`${styles.facts} text-center text-white f16 fw300 Mystery`}
              >
                FizzlFizz Facts:
                <br />
                <br />
                FizzlFizz is a galaxy where the stars twinkle in a spectrum of
                neon colors, creating a mesmerizing light show across the sky.
                <br />
                <br />
                2.The planets in FizzlFizz have rainbow rings that shimmer and
                change colors as they move.
                <br />
                ZabbleZib's Alien Language:
                <br />
                <br />
                "ZibZib!" - Great job!
                <br />
                "ZabbleZabble!" - You're awesome!
              </p>

              <Link href="/planet/start" className="text-decoration-none">
                <div className={`d-flex justify-content-center mt-4`}>
                  <button className="Londrina f22">Next Level</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmicStart;
