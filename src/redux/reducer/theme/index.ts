import _ from "lodash";
import { ActionIE, ThemeStoreIE } from "../../interface";
import { ActionEnum } from "../../type";
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
