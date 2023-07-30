import { Dispatch } from "redux";
import {
  QUESTION_ONE_FAIL,
  QUESTION_ONE_REQUEST,
  QUESTION_ONE_SUCCESS,
  QUESTION_TWO_REQUEST,
  QUESTION_TWO_SUCCESS,
  QUESTION_TWO_FAIL,
  QUESTION_THREE_REQUEST,
  QUESTION_THREE_SUCCESS,
  QUESTION_THREE_FAIL,
  QUESTION_FOUR_REQUEST,
  QUESTION_FOUR_SUCCESS,
  QUESTION_FOUR_FAIL,
  QUESTION_FIVE_REQUEST,
  QUESTION_FIVE_SUCCESS,
  QUESTION_FIVE_FAIL,
  QUESTION_SIX_REQUEST,
  QUESTION_SIX_SUCCESS,
  QUESTION_SIX_FAIL,
  QUESTION_SEVEN_REQUEST,
  QUESTION_SEVEN_SUCCESS,
  QUESTION_SEVEN_FAIL,
  QUESTION_ONE_POINT_TWO_REQUEST,
  QUESTION_ONE_POINT_TWO_SUCCESS,
  QUESTION_ONE_POINT_TWO_FAIL,
  SEND_CHOSEN_DATA_REQUEST,
  SEND_CHOSEN_DATA_SUCCESS,
  SEND_CHOSEN_DATA_FAIL,
} from "@/store/types/onboarding";
import { QuestionFourOption } from "../../../types/profile-setup/question4-b.types";
import { User } from "@/store/reducers/auth/types";

// Importing ThunkAction and SurveyAction types from the redux-thunk library and the onboarding reducer's types file
import { ThunkAction } from "redux-thunk";
import { SurveyAction, SurveyState } from "@/store/reducers/onboarding/types";
import { getStorageData } from "@/utils/getStorageData";

const userDataLocalStorage =
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("user") as string);

// Getting Question 1.1
export const getQuestionOne =
  (): ThunkAction<void, SurveyState, null, SurveyAction> =>
  async (dispatch: Dispatch<SurveyAction>) => {
    try {
      dispatch({ type: QUESTION_ONE_REQUEST });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/THFDEMOG1/${userDataLocalStorage.result.client_id}`
      );
      const data = await res.json();

      dispatch({
        type: QUESTION_ONE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_ONE_FAIL,
        payload: error,
      });
    }
  };

// Getting Question 1.2
export const getQuestionOnePointTwo =
  (): ThunkAction<void, SurveyState, null, SurveyAction> =>
  async (dispatch: Dispatch<SurveyAction>) => {
    try {
      dispatch({ type: QUESTION_ONE_POINT_TWO_REQUEST });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/THFDEMOG2/${userDataLocalStorage.result.client_id}`
      );
      const data = await res.json();

      dispatch({
        type: QUESTION_ONE_POINT_TWO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_ONE_POINT_TWO_FAIL,
        payload: error,
      });
    }
  };

// Getting Question Two
export const getQuestionTwo =
  (): ThunkAction<void, SurveyState, null, SurveyAction> =>
  async (dispatch: Dispatch<SurveyAction>) => {
    try {
      dispatch({ type: QUESTION_TWO_REQUEST });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/AVERAGETIME/${userDataLocalStorage.result.client_id}`
      );
      const data = await res.json();

      dispatch({
        type: QUESTION_TWO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_TWO_FAIL,
        payload: error,
      });
    }
  };

// Getting Question Three
export const getQuestionThree =
  (): ThunkAction<void, SurveyState, null, SurveyAction> =>
  async (dispatch: Dispatch<SurveyAction>) => {
    try {
      dispatch({ type: QUESTION_THREE_REQUEST });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/DISTANCE/${userDataLocalStorage.result.client_id}`
      );
      const data = await res.json();

      dispatch({
        type: QUESTION_THREE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_THREE_FAIL,
        payload: error,
      });
    }
  };

// Getting Question Four
export const getQuestionFour =
  (condition?: string): ThunkAction<void, SurveyState, null, SurveyAction> =>
  async (dispatch: Dispatch<SurveyAction>) => {
    try {
      dispatch({ type: QUESTION_FOUR_REQUEST });

      let data;
      if (condition === "yes") {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/OFFICEWORKSETTINGV3/${userDataLocalStorage.result.client_id}`
        );
        const dataJSON = await res.json();

        const toFilter = [
          {
            option_label: "Workstation in open-plan office area",
          },
          {
            option_label: "Cubicle or partially enclosed workstation",
          },
          {
            option_label: "Workstation in shared room",
          },
          {
            option_label: "Private office",
          },
          {
            option_label: "Specialist, practical or technical setting",
          },
          {
            option_label: "Other",
          },
        ];

        const filteredData = dataJSON.questions[0].options.filter(
          (option: QuestionFourOption) =>
            toFilter.some(
              (yesItem: { option_label: string }) =>
                yesItem.option_label === option.option_label
            )
        );

        data = {
          ...dataJSON,
          questions: [
            {
              ...dataJSON.questions[0],
              options: [...filteredData],
            },
          ],
        };
      } else if (condition === "no-advance") {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/OFFICEWORKSETTINGV3/${userDataLocalStorage.result.client_id}`
        );
        const dataJSON = await res.json();

        const toFilter = [
          {
            option_label: "Workstation in open-plan office area",
          },
          {
            option_label: "Cubicle or partially enclosed workstation",
          },
          {
            option_label: "Workstation in shared room",
          },
          {
            option_label: "Shared team table",
          },
          {
            option_label: "Quiet room",
          },
          {
            option_label: "Private office",
          },
          {
            option_label: "Meeting room",
          },
          {
            option_label: "Informal work setting (e.g. break-out area)",
          },
          {
            option_label: "Specialist, practical or technical setting",
          },
          {
            option_label: "Other",
          },
        ];

        const filteredData = dataJSON.questions[0].options.filter(
          (option: QuestionFourOption) =>
            toFilter.some(
              (yesItem: { option_label: string }) =>
                yesItem.option_label === option.option_label
            )
        );

        data = {
          ...dataJSON,
          questions: [
            {
              ...dataJSON.questions[0],
              options: [...filteredData],
            },
          ],
        };
      } else if (
        condition === "No, I use it when it’s unoccupied (without booking)"
      ) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/OFFICEWORKSETTINGV3/${userDataLocalStorage.result.client_id}`
        );
        const dataJSON = await res.json();

        const toFilter = [
          {
            option_label: "Workstation in open-plan office area",
          },
          {
            option_label: "Cubicle or partially enclosed workstation",
          },
          {
            option_label: "Workstation in shared room",
          },
          {
            option_label: "Shared team table",
          },
          {
            option_label: "Quiet room",
          },
          {
            option_label: "Private office",
          },
          {
            option_label: "Meeting room",
          },
          {
            option_label: "Informal work setting (e.g. break-out area)",
          },
          {
            option_label: "Specialist, practical or technical setting",
          },
          {
            option_label: "Other",
          },
          {
            option_label: "Not applicable – I use a mix of settings evenly",
          },
        ];

        const filteredData = dataJSON.questions[0].options.filter(
          (option: QuestionFourOption) =>
            toFilter.some(
              (yesItem: { option_label: string }) =>
                yesItem.option_label === option.option_label
            )
        );

        data = {
          ...dataJSON,
          questions: [
            {
              ...dataJSON.questions[0],
              options: [...filteredData],
            },
          ],
        };
      } else {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/OFFICEWORKSETTINGV2/${userDataLocalStorage.result.client_id}`
        );
        data = await res.json();
      }

      dispatch({
        type: QUESTION_FOUR_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_FOUR_FAIL,
        payload: error,
      });
    }
  };

// Getting Question Five
export const getQuestionFive =
  (version: string): ThunkAction<void, SurveyState, null, SurveyAction> =>
  async (dispatch: Dispatch<SurveyAction>) => {
    try {
      dispatch({ type: QUESTION_FIVE_REQUEST });

      let data;

      if (version === "v1") {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/HOMEWORKSETTINGV1/${userDataLocalStorage.result.client_id}`
        );
        data = await res.json();
      } else {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/HOMEWORKSETTINGV2/${userDataLocalStorage.result.client_id}`
        );
        data = await res.json();
      }

      dispatch({
        type: QUESTION_FIVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_FIVE_FAIL,
        payload: error,
      });
    }
  };

// Getting Question Six
export const getQuestionSix =
  (): ThunkAction<void, SurveyState, null, SurveyAction> =>
  async (dispatch: Dispatch<SurveyAction>) => {
    try {
      dispatch({ type: QUESTION_SIX_REQUEST });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/PRECENCEOFOTHERS/${userDataLocalStorage.result.client_id}`
      );
      const data = await res.json();

      dispatch({
        type: QUESTION_SIX_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_SIX_FAIL,
        payload: error,
      });
    }
  };

// Getting Question Seven
export const getQuestionSeven =
  (): ThunkAction<void, SurveyState, null, SurveyAction> =>
  async (dispatch: Dispatch<SurveyAction>) => {
    try {
      dispatch({ type: QUESTION_SEVEN_REQUEST });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/page/ACTIVITYQUESTION1/${userDataLocalStorage.result.client_id}`
      );
      const data = await res.json();

      dispatch({
        type: QUESTION_SEVEN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_SEVEN_FAIL,
        payload: error,
      });
    }
  };

//  CHOSEN ANSWERS
export const sendChosenData =
  (user: User): ThunkAction<void, any, null, SurveyAction> =>
  async (dispatch: Dispatch<SurveyAction>) => {
    const userDataLocalStorage =
      typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("user") as string);
    try {
      dispatch({ type: SEND_CHOSEN_DATA_REQUEST });

      let savedState = getStorageData("questionOneState");
      let savedState2 = getStorageData("questionOnePointTwoState");
      let savedState3 = getStorageData("questionTwoState");
      let savedState4 = getStorageData("questionThreeState");
      let savedState5 = getStorageData("questionFourAState");
      let savedState6 = getStorageData("questionFourBState");
      let savedState7 = getStorageData("questionFiveAState");
      let savedState8 = getStorageData("questionFiveBState");
      let savedState9 = getStorageData("questionSixState");
      let savedState10 = getStorageData("questionSevenState");

      const mergedArray = savedState
        .concat(
          savedState2,
          savedState3,
          savedState4,
          savedState5,
          savedState6,
          savedState7,
          savedState8,
          savedState9,
          savedState10
        )
        .filter((value: any) => value !== null);

      let dataToSend = mergedArray
        .map((res: any) => {
          let initial = {
            clientId: user.result.client_id,
            userId: user.result.id,
            value: null,
          };

          if ("percentage" in res)
            return {
              ...initial,
              questionId: res.id,
              value: res.percentage,
              valueText: res.label,
            };
          else if (Array.isArray(res.selectedOption))
            if ("id" in res)
              return res.selectedOption.map((resSelected: any) => {
                return {
                  ...initial,
                  questionId: res.id,
                  optionId: resSelected.option_id,
                  valueText: resSelected.option_label,
                };
              });
            else {
              return res.selectedOption.map((resSelected: any) => {
                return {
                  ...initial,
                  questionId: resSelected.id,
                  optionId: null,
                  valueText: resSelected.label,
                  isChecked: true,
                };
              });
            }
          else
            return {
              ...initial,
              questionId: res.id,
              optionId: res.selectedOption.option_id,
              valueText: res.selectedOption.option_label,
            };
        })
        .flat();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/thf/profile-answer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: dataToSend,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error saving data");
      }

      await response.json();

      dispatch({ type: SEND_CHOSEN_DATA_SUCCESS });
      userDataLocalStorage.result.is_profile_completed = true;

      localStorage.setItem("user", JSON.stringify(userDataLocalStorage));
      return { success: true };
    } catch (error) {
      dispatch({ type: SEND_CHOSEN_DATA_FAIL, payload: error });
      if (error instanceof Error) {
        throw new Error(error.message || "Something went wrong.");
      } else {
        throw new Error("Something went wrong.");
      }
    }
  };
