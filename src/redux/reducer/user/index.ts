import _ from "lodash";
import { ActionEnum } from "../../type";
import { ActionIE, UserStoreIE } from "../../interface";
import { initUserState } from "./default";

export default function themeStore(
  state: UserStoreIE = initUserState,
  action: ActionIE
) {
  switch (action.type) {
    case ActionEnum.SET_USER_INFO:
      return _.merge({}, state, {
        user: action.value,
      });

    default:
      return state;
  }
}
