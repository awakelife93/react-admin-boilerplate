import _ from "lodash";
import { ActionEnum } from "../../type";
import { ActionIE, ContentsStoreIE } from "../../interface";
import { initContentState } from "./default";

export default function contentsStore(
  state: ContentsStoreIE = initContentState,
  action: ActionIE
) {
  switch (action.type) {
    case ActionEnum.GET_CONTENTS:
      return _.merge([], state, {
        contents: [...state.contents, ...action.value],
      });

    default:
      return state;
  }
}
