import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USERSUB_REQUEST,
  USERSUB_FAIL,
  USERSUB_SUCCESS,
  POST_USERSUB_SUCCESS,
  REGISTERATION_REQUEST,
  REGISTERATION_SUCCESS,
  REGISTERATION_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
  CONFIRM_SIGNUP_START,
  CONFIRM_SIGNUP_END,
  CONFIRM_SIGNUP_SUCCESS,
  AuthAction,
  AuthState,
} from "../../types/auth";
import { initialState } from "@/store/store";

export const authReducer = (
  state = { ...initialState.auth },
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTERATION_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case LOAD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTERATION_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case LOGIN_FAIL:
    case REGISTERATION_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case USERSUB_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USERSUB_SUCCESS:
      return {
        ...state,
        loading: true,
        userSub: action.payload,
      };
    case POST_USERSUB_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case USERSUB_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT_FAIL:
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
    case CONFIRM_SIGNUP_START:
      return {
        ...state,
        loading: false,
      };
    case CONFIRM_SIGNUP_END:
      return {
        ...state,
        loading: false,
      };
    case CONFIRM_SIGNUP_SUCCESS:
      return {
        ...state,
        signUpConfirmed: true,
      };

    default:
      return state;
  }
};
