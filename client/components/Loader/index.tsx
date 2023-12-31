import { HashLoader } from "react-spinners";
import style from "./style.module.scss";
import React from 'react';

const Loader:React.FC = () => {
  return (
    <div className={style.loading_page}>
      <div className={style.inner_loading}>
        <HashLoader size={80} color="#1e1e1e" />
      </div>
    </div>
  );
};

export default Loader;
