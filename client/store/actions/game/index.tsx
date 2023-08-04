import {
  CLEAR_ERRORS,
  GET_GAME_FAIL,
  GET_GAME_REQUEST,
  GET_GAME_SUCCESS,
} from "../../types/game";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../../components/AuthWrapper/types";
import { Action, Dispatch } from "redux";

// UPDATE GAME
export const updateGame =
  (
    updateData: any,
    token: any
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
        },
      };

      await axios.patch(`/api/game`, updateData, config);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

// GET GAM
export const getGame = (token: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_GAME_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
      },
    };

    const { data } = await axios.get(`/api/game`, config);

    dispatch({ type: GET_GAME_SUCCESS, payload: data.game });
  } catch (error: any) {
    dispatch({ type: GET_GAME_FAIL, payload: error.response.data.message });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
