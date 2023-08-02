import React from "react";
// import { useRouter } from "next/router";
import "../styles/global.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-tooltip/dist/react-tooltip.css";

import type { AppProps } from "next/app";
import { wrapper, store } from "../store/store";
import { Provider, useDispatch } from "react-redux";
import AuthWrapper from "../components/AuthWrapper";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import DndProviderWrapper from "../components/DndProviderWrapper";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  axios.defaults.baseURL = "http://localhost:8000";

  return (
    <DndProviderWrapper>
      <Provider store={store}>
        <AuthWrapper>
          <Component {...pageProps} />
          <ToastContainer />
        </AuthWrapper>
      </Provider>
    </DndProviderWrapper>
  );
};

export default wrapper.withRedux(App);
