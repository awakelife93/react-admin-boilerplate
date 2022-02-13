import _ from "lodash";
import { AnyAction } from "redux";
import { ActionEnum, UserStoreType } from "../../type";
import { initUserState } from "./default";

const userStore = (
  state: UserStoreType = initUserState,
  action: AnyAction
): UserStoreType => {
  switch (action.type) {
    case ActionEnum.SET_USER_INFO:
      return _.merge({}, state, {
        user: action.value,
      });

    default:
      return state;
  }
};

export default userStore;
