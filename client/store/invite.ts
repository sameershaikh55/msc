import { Action, Dispatch } from 'redux';

// Define the initial state
export interface InviteState {
  inviteCode: string | null;
}

// Define the initial state value
const initialState: InviteState = {
  inviteCode: null,
};

// Define action types
export const SET_INVITE_CODE = 'SET_INVITE_CODE';

// Define the action interface
interface SetInviteCodeAction {
  type: typeof SET_INVITE_CODE;
  payload: string | null;
}

// Define the action creator
export const setInviteCode = (inviteCode: string | null): SetInviteCodeAction => ({
  type: SET_INVITE_CODE,
  payload: inviteCode,
});

// Define the combined action types
type InviteActionTypes = SetInviteCodeAction; // Add more action types with | (pipe) when needed

// Define the reducer
export const inviteReducer = (state = initialState, action: InviteActionTypes): InviteState => {
  switch (action.type) {
    case SET_INVITE_CODE:
      return {
        ...state,
        inviteCode: action.payload,
      };
    default:
      return state;
  }
};
