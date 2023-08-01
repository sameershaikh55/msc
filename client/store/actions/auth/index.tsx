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
} from "../../types/auth";
import axios from "axios";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../../components/AuthWrapper/types";
import { formData } from "../../../pages/signup/types";

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
    } catch (error) {
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

      dispatch({ type: REGISTERATION_SUCCESS, payload: data.user });
    } catch (error) {
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
  } catch (error) {
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
    } catch (error) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Reset Password
export const resetPassword =
  (
    password: string,
    token: string
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.patch(
        `/api/auth/password/reset/${token}`,
        password,
        config
      );

      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Load User
export const loadUser = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`/api/profile/user-data`);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
