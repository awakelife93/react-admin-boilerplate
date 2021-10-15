import _ from "lodash";
import { ActionIE, GlobalStoreIE } from "../../interface";
import { ActionEnum } from "../../type";
import { initGlobalState } from "./default";

export default function globalStore(
  state: GlobalStoreIE = initGlobalState,
  action: ActionIE
) {
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
}
