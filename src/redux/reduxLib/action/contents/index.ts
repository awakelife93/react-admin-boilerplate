import { ContentsType } from "../../../../api/GetAPI/type";
import { ActionEnum } from "../../../type";
import { initContentState } from "../../reducer/contents/default";

export const initContentsAction = () => ({
  type: ActionEnum.GET_CONTENTS,
  value: initContentState.contents,
});

export const getContentsAction = (value: ContentsType[]) => ({
  type: ActionEnum.GET_CONTENTS,
  value,
});
