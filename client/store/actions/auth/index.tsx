import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTERATION_FAIL,
  REGISTERATION_REQUEST,
  REGISTERATION_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  CLEAR_ERRORS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
} from "../../types/auth";
import axios from "axios";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../../components/AuthWrapper/types";
import { formData } from "../../../pages/signup/types";
import { setCookie } from "@/utils/cookies";
import { clearAllCookies } from "@/utils/clearCookies";

// Login
export const login =
  (
    email: string,
    password: string
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `/api/auth/login`,
        { email, password },
        config
      );

      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
      setCookie("token", data.token, 1);
    } catch (error: any) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };

// Registration
export const registration =
  (formData: formData): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: REGISTERATION_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `/api/auth/register`,
        { ...formData },
        config
      );

      dispatch({ type: REGISTERATION_SUCCESS, payload: data.message });
    } catch (error: any) {
      dispatch({
        type: REGISTERATION_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// // Logout User
export const logout = () => async (dispatch: Dispatch) => {
  try {
    await axios.get(`/api/auth/logout`);
    dispatch({ type: LOGOUT_SUCCESS });
    clearAllCookies();
  } catch (error: any) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

// Forget Password
export const forgetPassword =
  (email: string): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `/api/auth/password/forgot`,
        { email },
        config
      );

      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: data.message,
      });
    } catch (error: any) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Reset Password
export const resetPassword =
  (
    passwords: { password: string; confirmPassword: string },
    token: any
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.patch(
        `/api/auth/password/reset/${token}`,
        { ...passwords },
        config
      );

      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: data.message,
      });
    } catch (error: any) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Load User
export const loadUser = (token: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
      },
    };

    const { data } = await axios.get(`/api/profile/user-data`, config);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error: any) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Reset Password
export const updateProfile =
  (
    id: any,
    updateData: any
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: PROFILE_UPDATE_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.patch(
        `/api/profile/update/${id}`,
        updateData,
        config
      );

      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        payload: data.user,
      });
    } catch (error: any) {
      dispatch({
        type: PROFILE_UPDATE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Clearing Errors
export const clearErrors = () => async (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
