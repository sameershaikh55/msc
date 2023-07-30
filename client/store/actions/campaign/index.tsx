import { Dispatch } from "redux";
import React, { useEffect } from "react";
import axios from "axios";

import {
  CAMPAIGN_SURVEY_FAIL,
  CAMPAIGN_SURVEY_REQUEST,
  CAMPAIGN_SURVEY_SUCCESS,
  POST_CAMPAIGN_SURVEY_FAIL,
  POST_CAMPAIGN_SURVEY_REQUEST,
  POST_CAMPAIGN_SURVEY_SUCCESS,
} from "@/store/types/campaign";
import { User } from "@/store/reducers/auth/types";

// Importing ThunkAction and SurveyAction types from the redux-thunk library and the onboarding reducer's types file
import { ThunkAction } from "redux-thunk";
import { SurveyAction, SurveyState } from "@/store/reducers/onboarding/types";
import { useDispatch, useSelector } from "react-redux";
const userDataLocalStorage =
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("user") as string);

export const getCampaignQuestions =
  (userId: any): any =>
  async (dispatch: any) => {
    try {
      dispatch({ type: CAMPAIGN_SURVEY_REQUEST });

      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/campaign/${userId}`
      );
      dispatch({
        type: CAMPAIGN_SURVEY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CAMPAIGN_SURVEY_FAIL,
        payload: error,
      });
    }
  };
export const postCampaignQuestions =
  (questionData: any): any =>
  async (dispatch: any) => {
    try {
      dispatch({ type: POST_CAMPAIGN_SURVEY_REQUEST });

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/campaign`,
        questionData
      );
      dispatch({
        type: POST_CAMPAIGN_SURVEY_SUCCESS,
        payload: data,
      });
      if (questionData.data.isCampaignCompleted === true) {
        userDataLocalStorage.result.is_campaign_completed = true;
        localStorage.setItem("user", JSON.stringify(userDataLocalStorage));
      }

      return { success: true };
    } catch (error) {
      dispatch({
        type: POST_CAMPAIGN_SURVEY_FAIL,
        payload: error,
      });

      if (error instanceof Error) {
        return { error: error.message || "Something went wrong." };
      } else {
        return { error: "Something went wrong." };
      }
    }
  };
