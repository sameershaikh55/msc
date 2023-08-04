import { Games } from "@/store/types/game";
import { Settings } from "@/store/types/settings";

export interface Redirection {
  destination: string;
  permanent: boolean;
}

export interface AuthWrapperProps {
  children?: React.ReactNode;
  redirect?: Redirection;
}

export interface RootState {
  auth: {
    isAuthenticated: boolean;
    loading: boolean;
    user?: any;
    error?: any;
    message?: any;
    profileUpdate?: any;
    profileUpdateLoading?: any;
    loginLoading?: boolean;
    registerLoading?: boolean;
  };
  forgetPassword: {
    error?: any;
    message?: any;
    loading?: any;
  };
  resetPassword: {
    error?: any;
    message?: any;
    loading?: any;
  };
  game: {
    game: Games;
    loading: boolean;
    error: any;
  };
  settings: {
    settings: Settings;
    loading: boolean;
    error: any;
  };
}
