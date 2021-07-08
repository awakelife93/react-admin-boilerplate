import { ActionEnum } from "../../type";
import { initDarkModeState } from "../../reducer/theme/default";

export const initDarkModeAction = () => ({
  type: ActionEnum.SET_DARK_MODE,
  value: initDarkModeState.isDarkMode,
});

export const setDarkModeAction = (value: boolean) => ({
  type: ActionEnum.SET_DARK_MODE,
  value,
});
