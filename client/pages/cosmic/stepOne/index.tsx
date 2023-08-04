import React from "react";
import CosmicStep from "@/components/CosmicStep";

const CosmicStepOne: React.FC = () => {
  return (
    <CosmicStep
      correctPattern={["Happiness", "Disgust", "Fear", "Sadness"]}
      cosmicFeelings={[
        {
          title: "Disgust",
          picture: "/assets/cosmicStepOne/image1.png",
        },
        {
          title: "Sadness",
          picture: "/assets/cosmicStepOne/image4.png",
        },
        {
          title: "Fear",
          picture: "/assets/cosmicStepOne/image5.png",
        },
        {
          title: "Happiness",
          picture: "/assets/cosmicStepOne/image2.png",
        },
      ]}
      btn={{
        link: "/cosmic/stepTwo",
        text: "Next",
      }}
    />
  );
};

export default CosmicStepOne;
