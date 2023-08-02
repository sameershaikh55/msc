import React from "react";
import styles from "./style.module.scss";

const Footer:React.FC = () => {
  return (
    <div className={styles.footer_container}>
      <p className="Monda opacity-50 px-3 px-md-2">
        EmotionExplorers is designed to be a supportive tool for children with
        ASD to learn about emotions. It is not intended to replace professional
        medical advice or therapy. Always consult with a healthcare professional
        for medical advice.
      </p>
    </div>
  );
};

export default Footer;
