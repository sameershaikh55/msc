import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USERSUB_REQUEST,
  USERSUB_FAIL,
  USERSUB_SUCCESS,
  POST_USERSUB_SUCCESS,
  REGISTERATION_FAIL,
  REGISTERATION_REQUEST,
  REGISTERATION_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  CLEAR_ERRORS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CONFIRM_SIGNUP_START,
  CONFIRM_SIGNUP_END,
  CONFIRM_SIGNUP_SUCCESS,
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUBMIT_START,
  RESET_PASSWORD_SUBMIT_SUCCESS,
  RESET_PASSWORD_SUBMIT_FAIL,
} from "../../types/auth";
import axios from "axios";
import { Action, Dispatch } from "redux";
import { Auth } from "aws-amplify";
import { UsernamePasswordOpts } from "@aws-amplify/auth/lib-esm/types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "@/components/AuthWrapper/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Login
export const login =
  (
    email: string | UsernamePasswordOpts,
    password: string | undefined,
    router: any
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const user = await Auth.signIn(email, password);
      console.log(user);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
      try {
        dispatch({ type: USERSUB_REQUEST });

        const userSub = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/user?userSub=${user.username}`
        );
        dispatch({
          type: USERSUB_SUCCESS,
          payload: userSub,
        });

        localStorage.setItem("user", JSON.stringify(userSub?.data));

        const { is_campaign_completed, is_profile_completed } =
          userSub.data.result || {};
        if (!is_profile_completed) {
          await router.push("/onboarding/start");
          dispatch({
            type: POST_USERSUB_SUCCESS,
          });
        } else if (!is_campaign_completed) {
          await router.push("/campaign/start");
          dispatch({
            type: POST_USERSUB_SUCCESS,
          });
        } else {
          await router.push("/no_question");
          dispatch({
            type: POST_USERSUB_SUCCESS,
          });
        }
      } catch (error) {
        dispatch({ type: USERSUB_FAIL, payload: error });
        throw error;
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error });
      if (
        error instanceof Error &&
        error.message === "Incorrect username or password."
      ) {
        toast.warning("Wrong email or password", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }
      throw error;
    }
  };

// Registration
export const registration =
  (
    email: string,
    password: string,
    inviteCode: string,
    router: any
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: REGISTERATION_REQUEST });
      const user = await Auth.signUp({
        username: email,
        password: password,
        clientMetadata: {
          inviteCode: inviteCode,
        },
      });
      dispatch({ type: REGISTERATION_SUCCESS, payload: user });
      router.push("/login?verification=true");
    } catch (error) {
      dispatch({ type: REGISTERATION_FAIL, payload: error });
      if (
        error instanceof Error &&
        error.message === "An account with the given email already exists."
      ) {
        toast.warning(
          "You have already registered, please check your emails to verify your email address",
          {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          }
        );
      }
    }
  };

// Confirm Sign Up
export const confirmSignUp =
  (
    username: string,
    code: string,
    router: any
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    dispatch({ type: CONFIRM_SIGNUP_START });
    try {
      await Auth.confirmSignUp(username, code);
      dispatch({ type: REGISTERATION_SUCCESS, payload: username });
      dispatch({ type: CONFIRM_SIGNUP_SUCCESS });
      router.push("/thank_you");
    } catch (error) {
      console.error(error);
      dispatch({ type: REGISTERATION_FAIL, payload: error });
      router.push("/login");
      try {
        await Auth.resendSignUp(username);
      } catch (error) {
        dispatch({ type: REGISTERATION_FAIL, payload: error });
      }
    } finally {
      dispatch({ type: CONFIRM_SIGNUP_END });
    }
  };

// Logout User
export const logout = (router: any) => async (dispatch: Dispatch) => {
  try {
    await Auth.signOut();
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT_SUCCESS });
    router.push("/");
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const forgotPassword = (email: string) => async (dispatch: Dispatch) => {
  dispatch({ type: RESET_PASSWORD_START });
  try {
    await Auth.forgotPassword(email);
    dispatch({ type: RESET_PASSWORD_SUCCESS });
    toast.success("Reset email has been sent to your email address", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: RESET_PASSWORD_FAIL, payload: error });
  }
};

export const forgotPasswordSubmit =
  (username: string, code: string, newPassword: string, router: any) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: RESET_PASSWORD_SUBMIT_START });
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      dispatch({ type: RESET_PASSWORD_SUBMIT_SUCCESS });
      router.push("/login");
      toast.success("Your password has been reset successfully", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: RESET_PASSWORD_SUBMIT_FAIL });
    }
  };
