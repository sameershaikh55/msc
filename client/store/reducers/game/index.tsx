import { initialState } from "../../store";
import {
  GET_GAME_FAIL,
  GET_GAME_REQUEST,
  GET_GAME_SUCCESS,
  CLEAR_ERRORS,
  GameAction,
  GameState,
} from "../../types/game";

export const gameReducer = (
  state = { ...initialState.auth },
  action: GameAction
): GameState => {
  switch (action.type) {
    case GET_GAME_REQUEST:
      return {
        loading: true,
      };
    case GET_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        game: action.payload,
      };
    case GET_GAME_FAIL:
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
