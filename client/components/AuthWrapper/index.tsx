import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AuthWrapperProps, RootState } from "./types";
// import { loadUser } from "@/store/actions/auth";
import { ThunkDispatch } from "redux-thunk";
import { Dispatch } from "redux";
import { SurveyAction, SurveyState } from "@/store/reducers/auth/types";
import Loader from "@/components/Loader";
import { getCookie } from "@/utils/getCookies";
import { loadUser } from "@/store/actions/auth";

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  children,
}: AuthWrapperProps) => {
  const cookieValue = getCookie("token");

  const dispatch = useDispatch();
  const router = useRouter();

  const dispatchTyped: ThunkDispatch<SurveyState, null, SurveyAction> =
    dispatch as Dispatch<SurveyAction>;

  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (cookieValue) {
      dispatchTyped(loadUser(cookieValue));
    } else {
      if (
        !router.pathname.includes("/login") &&
        !router.pathname.includes("/signup") &&
        router.pathname !== "/" &&
        !router.pathname.includes("/reset_password") &&
        !router.pathname.includes("/password/reset")
      ) {
        router.replace("/login");
      }
    }
  }, [cookieValue]);

  if (
    loading &&
    !router.pathname.includes("/login") &&
    !router.pathname.includes("/register") &&
    router.pathname !== "/"
  ) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthWrapper;
