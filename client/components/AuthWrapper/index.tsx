import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AuthWrapperProps, RootState } from "./types";
import { loadUser } from "../../store/actions/auth";
import { ThunkDispatch } from "redux-thunk";
import { Dispatch } from "redux";
import { SurveyAction, SurveyState } from "../../store/reducers/auth/types";
import Loader from "../../components/Loader";

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  children,
}: AuthWrapperProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const dispatchTyped: ThunkDispatch<SurveyState, null, SurveyAction> =
    dispatch as Dispatch<SurveyAction>;

  const { user, isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    dispatchTyped(loadUser());
  }, []);

  console.log(router, "router");
  console.log(user, "user");

  // useEffect(() => {
  //   if (
  //     !user &&
  //     router.pathname !== "/thank_you" &&
  //     !router.pathname.includes("/confirmation") &&
  //     router.pathname !== "/login" &&
  //     !router.pathname.includes("/register") &&
  //     !router.pathname.includes("/welcome") &&
  //     router.pathname !== "/" &&
  //     !router.pathname.includes("/?inviteCode") &&
  //     !router.pathname.includes("/reset_password") &&
  //     !router.pathname.includes("/set_password")
  //   ) {
  //     router.push("/login");
  //   } else if (
  //     user &&
  //     is_profile_completed &&
  //     is_campaign_completed &&
  //     router.pathname !== "/campaign/thank_you" &&
  //     router.pathname !== "/thank_you" &&
  //     router.pathname !== "/no_question" &&
  //     !router.pathname.includes("/register") &&
  //     !router.pathname.includes("/welcome") &&
  //     !router.pathname.includes("/confirmation") &&
  //     router.pathname !== "/" &&
  //     !router.pathname.includes("/?inviteCode") &&
  //     !router.pathname.includes("/reset_password") &&
  //     !router.pathname.includes("/set_password")
  //   ) {
  //     router.push("/no_question");
  //   } else if (
  //     user &&
  //     is_profile_completed &&
  //     !is_campaign_completed &&
  //     (router.pathname === "/onboarding/start/" ||
  //       router.pathname === "/onboarding/profile_setup/question1_1" ||
  //       router.pathname === "/onboarding/profile_setup/question1_2" ||
  //       router.pathname === "/onboarding/profile_setup/question2" ||
  //       router.pathname === "/onboarding/profile_setup/question3" ||
  //       router.pathname === "/onboarding/profile_setup/question4_a" ||
  //       router.pathname === "/onboarding/profile_setup/question4_b" ||
  //       router.pathname === "/onboarding/profile_setup/question5" ||
  //       router.pathname === "/onboarding/profile_setup/question6" ||
  //       router.pathname === "/onboarding/profile_setup/question7" ||
  //       router.pathname === "/onboarding/profile_setup/question8" ||
  //       router.pathname === "/login" ||
  //       router.pathname === "onboarding/thank_you")
  //   ) {
  //     router.push("/campaign/start");
  //   } else if (
  //     user &&
  //     !is_profile_completed &&
  //     !is_campaign_completed &&
  //     (router.pathname === "/campaign/start/" ||
  //       router.pathname === "/campaign/questions" ||
  //       router.pathname === "/campaign/thank_you" ||
  //       router.pathname === "/login" ||
  //       router.pathname === "/no_question")
  //   ) {
  //     router.push("/onboarding/start");
  //   }
  // }, [router]);

  // if (loading) {
  //   return <Loader />;
  // }

  return <>{children}</>;
};

export default AuthWrapper;
