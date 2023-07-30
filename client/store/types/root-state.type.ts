import { InviteState } from "../invite";
import { SurveyState } from "../reducers/onboarding/types";
import { AuthState } from "./auth/index";

export interface RootState {
  onboarding: SurveyState;
  campaign: any
  auth: AuthState;
  invite: InviteState
}
