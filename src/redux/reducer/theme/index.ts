import _ from "lodash";
import { ActionEnum } from "../../type";
import { ActionIE, ThemeStoreIE } from "../../interface";
import { initDarkModeState } from "./default";

export default function themeStore(
  state: ThemeStoreIE = initDarkModeState,
  action: ActionIE
) {
  switch (action.type) {
    case ActionEnum.SET_DARK_MODE:
      return _.merge({}, state, {
        isDarkMode: action.value,
      });

    default:
      return state;
  }
}
