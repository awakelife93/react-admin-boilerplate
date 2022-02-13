import { ContentsType } from "../../../api/GetAPI/type";
import { initContentState } from "../../reducer/contents/default";
import { ActionEnum } from "../../type";

export const initContentsAction = () => ({
  type: ActionEnum.GET_CONTENTS,
  value: initContentState.contents,
});

export const getContentsAction = (value: ContentsType[]) => ({
  type: ActionEnum.GET_CONTENTS,
  value,
});
