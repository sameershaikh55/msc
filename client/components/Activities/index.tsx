import React from "react";
import styles from "./style.module.scss";
import { wordArray } from "../../utils/wordArray";

const Activities = () => {
  return (
    <div className={styles.activites_container}>
      <div className={styles.inner_activites_container}>
        <h1 className="d-flex justify-content-center gap-2">
          {wordArray("Activities").map((alpha) => {
            return (
              <div className={`${styles.heading_alpha} Monofett`}>{alpha}</div>
            );
          })}
        </h1>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <img src="/assets/activities1.svg" alt="" />
            </div>
            <div className="col-8">
              <p className="text-center f26 Monda opacity-50">
                Our activities are designed to be interactive and engaging,
                helping children learn about emotions in a fun and relaxed
                environment.
              </p>
              <p className="text-center f26 Monda opacity-50">
                From matching games and puzzles to storytelling and
                role-playing, our activities cater to different learning styles
                and preferences.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="row position-relative">
            <div className="d-flex justify-content-center">
              <button className={`${styles.free_trial} Londrina`}>
                Start Free Trial
              </button>
            </div>
            <div className={styles.bomb}>
              <img src="/assets/activities2.svg" alt="" />
            </div>
          </div>
        </div>

        <br />

        <div className="mt-5">
          <p className="text-center f34 opacity-50 Monda">
            Join the EmotionExplorers community today and embark on an exciting
            journey of emotional discovery. Let's explore the world of emotions
            together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
