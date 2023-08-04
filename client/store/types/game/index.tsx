export const GET_GAME_REQUEST = "GET_GAME_REQUEST";
export const GET_GAME_SUCCESS = "GET_GAME_SUCCESS";
export const GET_GAME_FAIL = "GET_GAME_FAIL";

export const UPDATE_GANE_REQUEST = "UPDATE_GANE_REQUEST";
export const UPDATE_GANE_SUCCESS = "UPDATE_GANE_SUCCESS";
export const UPDATE_GANE_FAIL = "UPDATE_GANE_FAIL";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

export interface Games {
  cosmic: {
    correct: number;
    wrong: number;
  };
  planet: {
    correct: number;
    wrong: number;
  };
  user: any;
  createdAt: Date;
}

export interface GameState {
  game?: Games | null;
  loading?: boolean;
  error?: any;
  message?: string | null;
}

export interface GameAction {
  type: string;
  payload?: any;
  error?: string;
}
