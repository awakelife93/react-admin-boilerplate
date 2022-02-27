import { ActionEnum, ContentsStoreType } from "@/redux/type";
import _ from "lodash";
import { AnyAction } from "redux";
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
