import { ContentsIE } from "../../../api/GetAPI/interface";
import { initContentState } from "../../reducer/contents/default";
import { ActionEnum } from "../../type";

export const initContentsAction = () => ({
  type: ActionEnum.GET_CONTENTS,
  value: initContentState.contents,
});

export const getContentsAction = (value: ContentsIE[]) => ({
  type: ActionEnum.GET_CONTENTS,
  value,
});
