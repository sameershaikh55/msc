import { initialState } from "../../store";
import {
  CLEAR_ERRORS,
  GET_SETTINGS_FAIL,
  GET_SETTINGS_REQUEST,
  GET_SETTINGS_SUCCESS,
  SettingsAction,
  SettingsState,
} from "../../types/settings";

export const settingsReducer = (
  state = { ...initialState.settings },
  action: SettingsAction
): SettingsState => {
  switch (action.type) {
    case GET_SETTINGS_REQUEST:
      return {
        loading: true,
      };
    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        settings: action.payload,
      };
    case GET_SETTINGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
