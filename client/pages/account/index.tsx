import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Heading from "../../components/Heading";
import { Player } from "@lottiefiles/react-lottie-player";

const Account: React.FC = () => {
  const accountLinks = [
    {
      title: "My details",
      link: "/details",
    },
    {
      title: "Games",
      link: "/activities",
    },
    {
      title: "Progress",
      link: "/progress",
    },
    {
      title: "Settings",
      link: "/settings",
    },
  ];

  return (
    <div className={styles.page_container}>
      <div className={styles.account_container}>
        <Player
          autoplay
          loop
          src="/assets/Animations/planet_stars/planet-stars-4282546.json"
          className={styles.animation}
        ></Player>

        <Heading account word="My Account" icon={false} exit={true} />

        <div className="container-fluid">
          <div className="row mt-5">
            {accountLinks.map(({ title, link }) => {
              return (
                <Link
                  className="col-6 d-flex justify-content-center text-decoration-none"
                  href={link}
                >
                  <div className={`${styles.account_card} text-white f32`}>
                    {title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
