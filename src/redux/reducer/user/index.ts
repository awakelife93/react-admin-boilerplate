import _ from "lodash";
import { ActionIE, UserStoreIE } from "../../interface";
import { ActionEnum } from "../../type";
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
