import React from "react";
import styles from "./style.module.scss";
import { wordArray } from "../../utils/wordArray";

const Hero:React.FC = () => {
  return (
    <div className={styles.hero_container}>
      <h1 className="d-flex justify-content-between gap-3 py-5">
        {wordArray("Emotion Explorers").map((alpha) => {
          return (
            <div className={`${styles.heading_alpha} Monofett`}>{alpha}</div>
          );
        })}
      </h1>

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4">
            <img src="/assets/hero1.svg" alt="" />
          </div>
          <div className="col-8">
            <p className={`text-white text-center f26 Monda`}>
              Welcome to EmotionExplorers, a magical world where learning about
              emotions is fun and engaging! Our mission is to help children with
              Autism Spectrum Disorder enhance their emotional intelligence
              through interactive activities and games.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-8">
            <p className={`text-white text-center f26 Monda`}>
              At EmotionExplorers, we believe that every child has the potential
              to understand, express, and manage their emotions effectively. Our
              platform is designed to make this learning journey enjoyable and
              accessible for children with ASD.{" "}
            </p>
          </div>
          <div className="col-4">
            <img src="/assets/hero2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
