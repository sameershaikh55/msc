export const GET_SETTINGS_REQUEST = "GET_SETTINGS_REQUEST";
export const GET_SETTINGS_SUCCESS = "GET_SETTINGS_SUCCESS";
export const GET_SETTINGS_FAIL = "GET_SETTINGS_FAIL";

export const UPDATE_SETTINGS_REQUEST = "UPDATE_SETTINGS_REQUEST";
export const UPDATE_SETTINGS_SUCCESS = "UPDATE_SETTINGS_SUCCESS";
export const UPDATE_SETTINGS_FAIL = "UPDATE_SETTINGS_FAIL";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

export interface Settings {
  background: string;
  font: string;
  user: any;
  createdAt: Date;
}

export interface SettingsState {
  settings?: Settings | null;
  loading?: boolean;
  error?: any;
  message?: string | null;
}

export interface SettingsAction {
  type: string;
  payload?: any;
  error?: string;
}
