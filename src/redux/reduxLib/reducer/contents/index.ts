import _ from "lodash";
import { AnyAction } from "redux";
import { ActionEnum, ContentsStoreType } from "../../../type";
import { initContentState } from "./default";

const contentsStore = (
  state: ContentsStoreType = initContentState,
  action: AnyAction
): ContentsStoreType => {
  switch (action.type) {
    case ActionEnum.GET_CONTENTS:
      return _.merge([], state, {
        contents: [...state.contents, ...action.value],
      });
    default:
      return state;
  }
};

export default contentsStore;
