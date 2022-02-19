import { ModalItem } from "../../../../common/components/Modal/type";
import globalWorker from "../../reducer/global";

export const initShowModalAction = () => globalWorker.actions.initShowModal();

export const showModalAction = (value: ModalItem) =>
  globalWorker.actions.showModal({ modalItem: value });
