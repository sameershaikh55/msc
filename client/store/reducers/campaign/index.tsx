import {
  CAMPAIGN_SURVEY_REQUEST,
  CAMPAIGN_SURVEY_SUCCESS,
  CAMPAIGN_SURVEY_FAIL,
  POST_CAMPAIGN_SURVEY_REQUEST,
  POST_CAMPAIGN_SURVEY_SUCCESS,
  POST_CAMPAIGN_SURVEY_FAIL,
} from "../../types/campaign";
import { LOGOUT_SUCCESS } from "../../types/auth";

// Define the reducer function with initial state and action types
export const campaignQuestions = (state = {}, action: any): any => {
  switch (action.type) {
    case CAMPAIGN_SURVEY_REQUEST:
      return {
        ...state,
        postLoading: true,
      };
    case CAMPAIGN_SURVEY_SUCCESS:
      return {
        ...state,
        postLoading: false,
        data: action.payload,
      };
    case CAMPAIGN_SURVEY_FAIL:
      return {
        ...state,
        postLoading: false,
        error: action.payload,
      };
    case POST_CAMPAIGN_SURVEY_REQUEST:
      return {
        ...state,
        postLoading: true,
      };
    case POST_CAMPAIGN_SURVEY_SUCCESS:
      return {
        ...state,
        postLoading: false,
        postData: action.payload,
      };
    case POST_CAMPAIGN_SURVEY_FAIL:
      return {
        ...state,
        postLoading: false,
        postError: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        postLoading: false,
        data: {},
      };
    default:
      return state;
  }
};
