import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Activities from "../../components/Activities";
import Footer from "../../components/footer";
import lottie from "lottie-web";

const Home: React.FC = () => {
  // const animationContainer = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   let animation: any = null;

  //   async function loadAnimationData() {
  //     try {
  //       const response = await fetch(
  //         "/assets/Animations/earth/earth-7440768.json"
  //       );
  //       const animationData = await response.json();

  //       if (animationContainer.current) {
  //         animation = lottie.loadAnimation({
  //           container: animationContainer.current,
  //           renderer: "svg",
  //           animationData: animationData,
  //           loop: true,
  //           autoplay: true,
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error loading animation data:", error);
  //     }
  //   }

  //   loadAnimationData();

  //   // Cleanup function
  //   return () => {
  //     if (animation) {
  //       animation.destroy();
  //     }
  //   };
  // }, []);

  return (
    <div className={styles.page_container}>
      {/* <div>
        <div style={{ width: "100px" }} ref={animationContainer} />
      </div> */}

      <Header />
      <Hero />
      <Activities />
      <Footer />
    </div>
  );
};

export default Home;
