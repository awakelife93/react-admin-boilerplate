import { CommonRender } from "../../../../common/components";

export const initGlobalState = {
  modalItem: {
    isShowModal: false,
    children: CommonRender.DefaultFC,
    childrenProps: {},
    style: {},
    titleItem: {
      title: "",
      subTitle: "",
      titleStyle: {},
      subTitleStyle: {},
    },
    buttonItem: [],
    option: {
      isDimClose: false,
      isKeyClose: true,
    },
  },
};
