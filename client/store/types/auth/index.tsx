import { User } from "../user.type";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const USERSUB_REQUEST = "USERSUB_REQUEST";
export const USERSUB_SUCCESS = "USERSUB_SUCCESS";
export const USERSUB_FAIL = "USERSUB_FAIL";
export const POST_USERSUB_SUCCESS = "POST_USERSUB_SUCCESS";

export const REGISTERATION_REQUEST = "REGISTERATION_REQUEST";
export const REGISTERATION_SUCCESS = "REGISTERATION_SUCCESS";
export const REGISTERATION_FAIL = "REGISTERATION_FAIL";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAIL = "LOAD_USER_FAIL";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const CONFIRM_SIGNUP_START = "CONFIRM_SIGNUP_START";
export const CONFIRM_SIGNUP_END = "CONFIRM_SIGNUP_END";
export const CONFIRM_SIGNUP_SUCCESS = "CONFIRM_SIGNUP_SUCCESS";

export const RESET_PASSWORD_START = "RESET_PASSWORD_START";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";

export const RESET_PASSWORD_SUBMIT_START = "RESET_PASSWORD_SUBMIT_START";
export const RESET_PASSWORD_SUBMIT_SUCCESS = "RESET_PASSWORD_SUBMIT_SUCCESS";
export const RESET_PASSWORD_SUBMIT_FAIL = "RESET_PASSWORD_SUBMIT_FAIL";

export interface AuthState {
  user?: User | null;
  isAuthenticated?: boolean;
  loading?: boolean;
  signUpConfirmed?: boolean;
  error?: any;
  userSub?: any;
}

export interface AuthAction {
  type: string;
  payload?: any;
  error?: string;
}
