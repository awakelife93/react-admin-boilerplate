import _ from "lodash";
import { AnyAction } from "redux";
import { ActionEnum, ThemeStoreType } from "../../../type";
import { initDarkModeState } from "./default";

const themeStore = (
  state: ThemeStoreType = initDarkModeState,
  action: AnyAction
): ThemeStoreType => {
  switch (action.type) {
    case ActionEnum.SET_DARK_MODE:
      return _.merge({}, state, {
        isDarkMode: action.value,
      });
    default:
      return state;
  }
};

export default themeStore;
