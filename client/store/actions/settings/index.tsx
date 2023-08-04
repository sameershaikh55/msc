import {
  CLEAR_ERRORS,
  GET_SETTINGS_FAIL,
  GET_SETTINGS_REQUEST,
  GET_SETTINGS_SUCCESS,
} from "../../types/settings";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../../components/AuthWrapper/types";
import { Action, Dispatch } from "redux";

// UPDATE SETTINGS
export const updateSettings =
  (
    updateData: any,
    token: any
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.patch(`/api/settings`, updateData, config);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

// GET GAM
export const getSettings = (token: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_SETTINGS_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`/api/settings`, config);

    dispatch({ type: GET_SETTINGS_SUCCESS, payload: data.settings });
  } catch (error: any) {
    dispatch({ type: GET_SETTINGS_FAIL, payload: error.response.data.message });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
