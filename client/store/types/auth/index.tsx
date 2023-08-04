import { User } from "../user.type";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const REGISTERATION_REQUEST = "REGISTERATION_REQUEST";
export const REGISTERATION_SUCCESS = "REGISTERATION_SUCCESS";
export const REGISTERATION_FAIL = "REGISTERATION_FAIL";
export const REGISTERATION_RESET = "REGISTERATION_RESET";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAIL = "LOAD_USER_FAIL";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL";
export const FORGOT_PASSWORD_RESET = "FORGOT_PASSWORD_RESET";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";

export const PROFILE_UPDATE_REQUEST = "PROFILE_UPDATE_REQUEST";
export const PROFILE_UPDATE_SUCCESS = "PROFILE_UPDATE_SUCCESS";
export const PROFILE_UPDATE_FAIL = "PROFILE_UPDATE_FAIL";
export const PROFILE_UPDATE_RESET = "PROFILE_UPDATE_RESET";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

export interface AuthState {
  user?: User | null;
  isAuthenticated?: boolean;
  loading?: boolean;
  error?: any;
  profileUpdateLoading?: boolean;
  profileUpdate?: boolean | null;
  profileUpdateError?: any;
  message?: string | null;
  loginLoading?: boolean;
  registerLoading?: boolean;
}

export interface AuthAction {
  type: string;
  payload?: any;
  error?: string;
}
