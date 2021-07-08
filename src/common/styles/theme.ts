import { CommonColor } from ".";

// 테마용 컬러
const CommonTheme = {
  BLACK_THEME: {
    LAYOUT: {
      backgroundColor: CommonColor.BLACK,
    },
    MODAL_LAYOUT: {
      border: `1px solid ${CommonColor.WHITE}`,
    },
    COMPONENT: {
      MENU_BOX: {
        CONTAINER: {
          backgroundColor: CommonColor.BLACK,
          border: `1px solid ${CommonColor.WHITE}`,
        },
        ITEM: {
          color: CommonColor.WHITE,
        },
      },
      SUB_MIT_BUTTON: {
        backgroundColor: CommonColor.BLACK,
        color: CommonColor.WHITE,
        border: `1px solid ${CommonColor.WHITE}`,
      },
      TEXT_BUTTON: {
        backgroundColor: CommonColor.BLACK,
        color: CommonColor.WHITE,
      },
      ICON: {
        color: CommonColor.WHITE,
      },
      COMMON_LABEL: {
        color: CommonColor.WHITE,
      },
      CARD: {
        backgroundColor: CommonColor.BLACK,
        color: CommonColor.WHITE,
      },
    },
  },
  WHITE_THEME: {
    LAYOUT: {
      backgroundColor: CommonColor.WHITE,
    },
    MODAL_LAYOUT: {
      border: `1px solid ${CommonColor.BLACK}`,
    },
    COMPONENT: {
      MENU_BOX: {
        CONTAINER: {
          backgroundColor: CommonColor.WHITE,
          border: `1px solid ${CommonColor.BLACK}`,
        },
        ITEM: {
          color: CommonColor.BLACK,
        },
      },
      SUB_MIT_BUTTON: {
        backgroundColor: CommonColor.WHITE,
        color: CommonColor.BLACK,
        border: `1px solid ${CommonColor.BLACK}`,
      },
      TEXT_BUTTON: {
        backgroundColor: CommonColor.WHITE,
        color: CommonColor.BLACK,
      },
      ICON: {
        color: CommonColor.BLACK,
      },
      COMMON_LABEL: {
        color: CommonColor.BLACK,
      },
      CARD: {
        backgroundColor: CommonColor.WHITE,
        color: CommonColor.BLACK,
      },
    },
  },
};

export default CommonTheme;
