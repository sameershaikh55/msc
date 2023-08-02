import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Heading from "../../components/Heading";

const Activities: React.FC = () => {
  const activities = [
    {
      title: "Cosmic Feelings",
      btn: "Lets explore",
      link: "/cosmic/start",
    },
    {
      title: "Planet Emotion",
      btn: "Lets explore",
      link: "/planet/start",
    },
  ];

  return (
    <div className={styles.page_container}>
      <div className={styles.activities_container}>
        <Heading word="Activities" account />

        <div className="container-fluid">
          <div className="row mt-md-5 gy-5">
            {activities.map(({ title, link, btn }) => {
              return (
                <div className="col-12 col-md-6">
                  <div className={styles.activity_card}>
                    <h1>{title}</h1>

                    <div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <Link
                      className="col-6 d-flex justify-content-center text-decoration-none"
                      href={link}
                    >
                      <div className={`${styles.activities_btn} text-dark f20`}>
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
