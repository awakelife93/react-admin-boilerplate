import { ModalItem } from "@/common/components/Modal/type";
import { ActionEnum } from "@/redux/type";
import { initGlobalState } from "../../reducer/global/default";

export const initShowModalAction = () => ({
  type: ActionEnum.SET_MODAL_ITEM,
  value: initGlobalState.modalItem,
});

export const showModalAction = (value: ModalItem) => ({
  type: ActionEnum.SET_MODAL_ITEM,
  value,
});
