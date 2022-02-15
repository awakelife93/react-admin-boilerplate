import { ModalItem } from "../../../common/components/Modal/type";
import { initGlobalState } from "../../reducer/global/default";
import { ActionEnum } from "../../type";

export const initShowAdAction = () => ({
  type: ActionEnum.SET_AD_CONTAINER,
  value: initGlobalState.isShowAdContainer,
});

export const initShowModalAction = () => ({
  type: ActionEnum.SET_MODAL_ITEM,
  value: initGlobalState.modalItem,
});

export const showAdAction = (value: boolean) => ({
  type: ActionEnum.SET_AD_CONTAINER,
  value,
});

export const showModalAction = (value: ModalItem) => ({
  type: ActionEnum.SET_MODAL_ITEM,
  value,
});
