import { CommonRender } from "../../../../common/components";
import { GlobalStoreType } from "../../../type";

export const initGlobalState: GlobalStoreType = {
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
