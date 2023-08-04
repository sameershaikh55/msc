export interface User {
  message: string;
  result: {
    id: number;
    client_id: number;
    guid: string;
    enabled: boolean;
    email: string;
    first_name: string;
    last_name: string;
    location_id: number;
    department_id: number;
    role_id: number;
    deleted: boolean;
    user_application: string;
    v2_role_id: number;
  };
}

export interface SurveyState {
  user: any | {}; // the state of question one
  userSub: any | {}
  isAuthenticated: boolean; // a boolean representing whether the onboarding is currently loading
  loading: boolean; // a boolean representing whether the onboarding is currently loading
  error?: string | null; // a string representing any errors that occur during the onboarding
  signUpConfirmed?: boolean;
}

export interface SurveyAction {
  type: string;
  payload?: any;
  error?: string;
  signUpConfirmed?: boolean;
}
