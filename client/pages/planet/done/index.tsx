import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import CosmicHeading from "../../../components/CosmicHeading";

const CosmicStart: React.FC = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.cosmic_container}>
        <CosmicHeading heading="Well Done!!" font="Love text-green" />

        <div className="container-fluid">
          <div className={`${styles.cosmic_body} row align-items-center`}>
            <div className="col-12 col-md-9 mx-auto">
              <p className={`${styles.welcome_text} Aoboshi text-white mb-5`}>
                "ZabbleZabbleZib! Fantastic work, space adventurer! You've
                brilliantly finished this level and aided ZabbleZib in his quest
                to comprehend human emotions. Your interstellar journey on
                Planet Emotion is truly making an impact. Prepare to launch into
                the next thrilling level. Keep shining, star explorer!"
              </p>
            </div>
            <div className="col-12 col-md-9 mx-auto">
              <p
                className={`${styles.facts} text-center text-white f16 fw300 Mystery`}
              >
                FizzlFizz Facts:
                <br />
                <br />
                FizzlFizz is a galaxy where the stars twinkle in a spF loating
                islands made of crystals drift through the sky, reflecting the
                neon starlight in dazzling patterns.
                <br />
                The inhabitants of FizzlFizz communicate using a unique language
                of musical tones and colorful light signals.
              </p>
              <br />
              <br />
              <p
                className={`${styles.facts} text-center text-white f16 fw300 Mystery`}
              >
                ZabbleZib's Alien Language:
                <br />
                <br />
                "ZabbleZabbleZib!" - You're a star!
                <br />
                "ZibZabbleZabble!" - Fantastic effort!
              </p>

              <Link href="/account" className="text-decoration-none">
                <div
                  className={`d-flex justify-content-center mt-4 mb-5 mb-md-0`}
                >
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
