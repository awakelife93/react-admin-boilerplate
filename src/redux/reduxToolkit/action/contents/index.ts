import { ContentsType } from "../../../../api/GetAPI/type";
import contentsWorker from "../../reducer/contents";

export const initContentsAction = () => contentsWorker.actions.initContents();

export const getContentsAction = (value: ContentsType[]) =>
  contentsWorker.actions.getContents({ contents: value });
