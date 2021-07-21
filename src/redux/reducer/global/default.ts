import { CommonRender } from "../../../common/components";
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
    children: CommonRender.DefaultFC,
    childrenProps: {},
    style: {},
    option: {
      dimClose: defaultDimClose,
      keyClose: defaultKeyClose,
    },
  },
};
