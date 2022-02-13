import _ from "lodash";
import { AnyAction } from "redux";
import { ActionEnum, GlobalStoreType } from "../../type";
import { initGlobalState } from "./default";

const globalStore = (
  state: GlobalStoreType = initGlobalState,
  action: AnyAction
): GlobalStoreType => {
  switch (action.type) {
    case ActionEnum.SET_AD_CONTAINER:
      return _.merge({}, state, {
        isShowAdContainer: action.value,
      });

    case ActionEnum.SET_MODAL_ITEM:
      return _.merge({}, state, {
        modalItem: action.value,
      });

    default:
      return state;
  }
};

export default globalStore;
