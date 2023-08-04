import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import {
  authReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
} from "./reducers/auth";
import { gameReducer } from "./reducers/game";
import { RootState } from "./types/root-state.type";
import { settingsReducer } from "./reducers/settings";

export const initialState: RootState = {
  auth: {
    user: {},
    isAuthenticated: false,
    loading: false,
  },
  game: {
    loading: false,
  },
  settings: {
    loading: false,
  },
};

// Combine multiple reducers using combineReducers()
const reducer = combineReducers({
  auth: authReducer,
  forgetPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  game: gameReducer,
  settings: settingsReducer,
});

// Create middleware for the store
const middleware = [thunk];

// Create the store using createStore() with the combined reducers, initial state, and middleware
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Create a function to assign the store to the Next.js wrapper
const makeStore = () => store;

// Create a wrapper for the store using createWrapper() from next-redux-wrapper
export const wrapper = createWrapper(makeStore);
