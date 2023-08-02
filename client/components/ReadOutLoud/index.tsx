import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

const ReadOutLoud: React.FC<{ button: any }> = ({ button }) => {
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);
  const [textToRead, setTextToRead] = useState<string>("");

  useEffect(() => {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      setSynth(synth);
    }
  }, []);

  const handleReadOutLoud = () => {
    if (synth && textToRead) {
      const utterance = new SpeechSynthesisUtterance(textToRead);
      synth.speak(utterance);
    }
  };

  useEffect(() => {
    const bodyText = document.body.innerText;
    setTextToRead(bodyText);
  }, []);

  return (
    <div className={styles.read_out} onClick={handleReadOutLoud}>
      {button}
    </div>
  );
};

export default ReadOutLoud;
