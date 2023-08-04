import React from "react";
import styles from "./style.module.scss";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Activities from "../../components/Activities";
import Footer from "../../components/footer";

const Home: React.FC = () => {
  return (
    <div className={styles.page_container}>
      <Header />
      <Hero />
      <Activities />
      <Footer />
    </div>
  );
};

export default Home;
