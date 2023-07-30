import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/global.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-tooltip/dist/react-tooltip.css";

import type { AppProps } from "next/app";
// import { wrapper, store } from "../store/store";
import { Provider, useDispatch } from "react-redux";
// import AuthWrapper from "@/components/AuthWrapper";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
  // return (
  //   <Provider store={store}>
  //     <AuthWrapper>
  //       <Component {...pageProps} />
  //       <ToastContainer />
  //     </AuthWrapper>
  //   </Provider>
  // );
}

export default App;
// export default wrapper.withRedux(App);
