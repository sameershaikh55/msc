import React from "react";
import { HashLoader } from "react-spinners";

const SmallLoader:React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <HashLoader size={20} color="#283046" />
    </div>
  );
};

export default SmallLoader;
