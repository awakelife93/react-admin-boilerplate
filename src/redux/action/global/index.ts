import { ModalItem } from "../../../common/components/Modal/type";
import { initGlobalState } from "../../reducer/global/default";
import { ActionEnum } from "../../type";

export const initShowModalAction = () => ({
  type: ActionEnum.SET_MODAL_ITEM,
  value: initGlobalState.modalItem,
});

export const showModalAction = (value: ModalItem) => ({
  type: ActionEnum.SET_MODAL_ITEM,
  value,
});
