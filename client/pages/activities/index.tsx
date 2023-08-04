import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Heading from "../../components/Heading";
import { Player } from "@lottiefiles/react-lottie-player";

const Activities: React.FC = () => {
  const activities = [
    {
      title: "Cosmic Feelings",
      btn: "Lets explore",
      link: "/cosmic/start",
      anime: "/assets/Animations/ufo/alien-ufo-5991791.json",
    },
    {
      title: "Planet Emotion",
      btn: "Lets explore",
      link: "/planet/start",
      anime: "/assets/Animations/alien_game/alien-4741015.json",
    },
  ];

  return (
    <div className={styles.page_container}>
      <div className={styles.activities_container}>
        <Heading word="Activities" account />

        <div className="container-fluid">
          <div className="row mt-2 gy-5">
            {activities.map(({ title, link, btn, anime }, i) => {
              return (
                <div key={i} className="col-12 col-md-6">
                  <div className={styles.activity_card}>
                    <h1 className="mb-3">{title}</h1>

                    <div className={styles.animation_container}>
                      {i === 0 && (
                        <Player
                          autoplay
                          loop
                          src="/assets/Animations/shining/-stars/stars-5252137.json"
                          className={styles.shiningStar1}
                        ></Player>
                      )}
                      {i === 1 && (
                        <Player
                          autoplay
                          loop
                          src="/assets/Animations/shining/-stars/stars-5252137.json"
                          className={styles.shiningStar2}
                        ></Player>
                      )}

                      <Player
                        autoplay
                        loop
                        src={anime}
                        className={styles.animation}
                      ></Player>
                    </div>

                    <Link
                      className="col-6 d-flex justify-content-center text-decoration-none mt-5"
                      href={link}
                    >
                      <div
                        className={`${styles.activities_btn} text-dark f20 position-relative`}
                      >
                        <Player
                          autoplay
                          loop
                          src="/assets/Animations/shining/-stars/stars-5252137.json"
                          className={styles.shiningStar3}
                        ></Player>
                        <Player
                          autoplay
                          loop
                          src="/assets/Animations/shining/-stars/stars-5252137.json"
                          className={styles.shiningStar4}
                        ></Player>

                        {btn}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
