import { defaultFC } from "../../../common/components/CommonRender";
import {
  defaultDimClose,
  defaultKeyClose,
  defaultShowAdContainer,
  defaultShowModal,
} from "../../../common/const";

export const initGlobalState = {
  isShowAdContainer: defaultShowAdContainer,
  modalItem: {
    isShowModal: defaultShowModal,
    children: defaultFC,
    childrenProps: {},
    style: {},
    option: {
      dimClose: defaultDimClose,
      keyClose: defaultKeyClose,
    },
  },
};
