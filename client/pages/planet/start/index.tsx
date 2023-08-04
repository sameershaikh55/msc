import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import CosmicHeading from "../../../components/CosmicHeading";
import { Player } from "@lottiefiles/react-lottie-player";

const PlanetStart: React.FC = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.cosmic_container}>
        <CosmicHeading heading="Planet Emotion" font="Love text-green f46" />

        <div className="container-fluid">
          <div
            className={`${styles.cosmic_body} row align-items-center position-relative`}
          >
            <div className="col-12 col-xl-11">
              <p className="text-center text-white f22 fw400 Londrina">
                Welcome to Planet Emotion! Join ZabbleZib, a friendly alien from
                the galaxy of FizzlFizz, on an exciting adventure to understand
                human emotions.
                <br />
                <br />
                ZabbleZib has just landed on Earth and finds human emotions
                quite puzzling. He needs your help to decode these complex
                feelings so he can make friends on Earth.
                <br />
                In this interactive game, you'll help ZabbleZib understand
                different situations and guess what the people in them are
                feeling.
                <br />
                <br />
                Each correct guess helps ZabbleZib learn more about how humans
                express their emotions. As a reward for your help, ZabbleZib
                will share with you some of the most amazing and unique
                treasures from FizzlFizz. These could be glowing space gems,
                zero-gravity pets, or even a piece of a rainbow ring from a
                FizzlFizz planet!
                <br />
                <br />
                As you journey through the game, you'll help ZabbleZib navigate
                a variety of situations - from simple ones like a child's
                birthday party to more complex ones like a friend moving away.
                <br />
                <br />
                Join us in Planet Emotion, help ZabbleZib decode human emotions,
                and collect your intergalactic rewards on this exciting journey!
              </p>
              <Link href="/planet/stepOne " className="text-decoration-none">
                <div
                  className={`d-flex justify-content-center mt-5 pb-5 pb-md-0`}
                >
                  <button className="Londrina f22">Start</button>
                </div>
              </Link>
            </div>

            <Player
              autoplay
              loop
              src="/assets/Animations/earth/earth-7440768.json"
              className={styles.animation}
            ></Player>

            <img
              className={`${styles.planetAlien}`}
              src="/assets/planetAlien.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetStart;
