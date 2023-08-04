import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import CosmicHeading from "../../../components/CosmicHeading";

const CosmicStart: React.FC = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.cosmic_container}>
        <CosmicHeading heading="Cosmic Feelings" />

        <div className="container-fluid">
          <div className={`${styles.cosmic_body} row align-items-center`}>
            <div className="col-12 col-md-3 order-1 order-md-0">
              <div className="row my-5 my-md-0">
                <div className="col-8 mx-auto col-md-12">
                  <img
                    className="w-100"
                    src="/assets/cosmic_alien.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <p className="text-center text-white f18 fw300 Londrina">
                Welcome to ZabbleZib's Cosmic Feeling’s, an exciting online game
                where you help our friendly alien, ZabbleZib, understand human
                emotions! <br /> <br /> ZabbleZib has just landed on Earth from
                the far-off galaxy of FizzlFizz. While ZabbleZib is a quick
                learner, human emotions are a mystery to him. He needs your help
                to decode these complex feelings so he can communicate
                effectively with humans. <br /> <br /> In this interactive game,
                players will help ZabbleZib match pictures of people displaying
                different emotions with the correct emotion words. Each correct
                match will help ZabbleZib understand a little more about how
                humans express their feelings. <br /> <br /> As you navigate
                through various levels, you'll encounter a wide range of
                emotions - from simple ones like 'happy' and 'sad' to more
                complex feelings like 'surprised' and 'confused'. Each level
                increases in difficulty, challenging players to really
                understand and recognize a wide range of human emotions. <br />{" "}
                But that's not all! As you help ZabbleZib, you'll also learn
                more about his home, the galaxy of FizzlFizz, and maybe even
                pick up some of ZabbleZib's alien language along the way! <br />{" "}
                <br /> Join us in ZabbleZib's Cosmic Feeling’s and embark on an
                intergalactic journey of emotional discovery. Let's help
                ZabbleZib decode human emotions and become the best
                intergalactic friend we could ask for!
              </p>

              <Link href="/cosmic/stepOne" className="text-decoration-none">
                <div className={`d-flex justify-content-center mt-5`}>
                  <button className="Londrina f22">Start</button>
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
