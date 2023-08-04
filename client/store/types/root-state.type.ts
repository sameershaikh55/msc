import { AuthState } from "./auth/index";
import { GameState } from "./game/index";
import { SettingsState } from "./settings/index";

export interface RootState {
  auth: AuthState;
  game: GameState;
  settings: SettingsState;
}
