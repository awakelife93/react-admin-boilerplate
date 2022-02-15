import _ from "lodash";
import { _showModalAction } from "../../common/components/Modal";
import { ShowModalActionType } from "../../common/components/Modal/type";
import { UnknownObject } from "../../common/type";

export const initWindowFunc = ({
  initUserInfoAction,
  showModalAction,
}: {
  initUserInfoAction: Function;
  showModalAction: Function;
}): void => {
  window.globalFunc = {
    initUserInfoAction: () => initUserInfoAction(),
    showModalAction: ({
      next = showModalAction,
      type,
      item,
    }: ShowModalActionType) =>
      _showModalAction({
        next,
        type,
        item: {
          children: item.children,
          childrenProps: item.childrenProps,
          style: {
            width: 500,
            height: 150,
            borderRadius: 25,
            padding: 20,
            ...item.style,
          },
          option: {
            isDimClose: true,
            isKeyClose: true,
            ...item.option,
          },
        },
      }),
  };
};

export const initWindowObject = (): void => {
  window.globalEntity = {
    email: "",
    nickname: "",
  };
};

export const getWindowDataLength = (): number => {
  return Object.keys(window.globalEntity).length ?? 0;
};

export const getWindowData = (key: string): string => {
  return window.globalEntity[key] ?? "";
};

export const setWindowData = (item: UnknownObject): void => {
  const keys = Object.keys(item);

  _.forEach(keys, (key: string) => {
    window.globalEntity[key] = item[key];
  });
};

export const removeWindowData = (key: string): void => {
  window.globalEntity[key] = "";
};

export const clearWindowData = (): void => {
  const keys = Object.keys(window.globalEntity);

  _.forEach(keys, (key: string) => {
    removeWindowData(key);
  });
};
