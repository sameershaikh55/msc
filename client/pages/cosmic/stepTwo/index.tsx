import React from "react";
import CosmicStep from "@/components/CosmicStep";

const CosmicStepTwo: React.FC = () => {
  return (
    <CosmicStep
      correctPattern={["Suprise", "Shy", "Confused", "Anger"]}
      cosmicFeelings={[
        {
          title: "Shy",
          picture: "/assets/cosmicStepTwo/image6.png",
        },
        {
          title: "Suprise",
          picture: "/assets/cosmicStepTwo/image8.png",
        },
        {
          title: "Anger",
          picture: "/assets/cosmicStepTwo/image7.png",
        },
        {
          title: "Confused",
          picture: "/assets/cosmicStepTwo/image3.png",
        },
      ]}
      btn={{
        link: "/cosmic/done/",
        text: "Finish!",
      }}
    />
  );
};

export default CosmicStepTwo;
