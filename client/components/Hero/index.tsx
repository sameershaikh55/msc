import React from "react";
import styles from "./style.module.scss";
import MonofettHeading from "../MonofettHeading";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero_container}>
      <MonofettHeading words={["Emotion", "Explorers"]} />

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 order-1 order-md-0">
            <img className="w-100" src="/assets/hero1.svg" alt="" />
          </div>
          <div className="col-12 col-md-8">
            <p className={`text-white text-center f26 Monda`}>
              Welcome to EmotionExplorers, a magical world where learning about
              emotions is fun and engaging! Our mission is to help children with
              Autism Spectrum Disorder enhance their emotional intelligence
              through interactive activities and games.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-8">
            <p className={`text-white text-center f26 Monda`}>
              At EmotionExplorers, we believe that every child has the potential
              to understand, express, and manage their emotions effectively. Our
              platform is designed to make this learning journey enjoyable and
              accessible for children with ASD.{" "}
            </p>
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100" src="/assets/hero2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
