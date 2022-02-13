/// <reference types="react-scripts" />
interface Window {
  globalEntity: {
    [index: string];
    email: string;
    nickname: string;
  };
  globalFunc: {
    initUserInfoAction: Function;
    /**
     * @description
     * src/modal/index.ts
     * ShowModalActionType 참고
     *
     * todo: 레이아웃을 고르기 위해 분리했지만, 인터페이스 확장이 어려워져서 합칠까 고민중
     */
    showModalAction: ({
      next,
      type,
      children,
      item: {
        childrenProps,
        style,
        option: { dimClose, keyClose },
      },
    }: {
      next?: Function;
      type: "MESSAGE";
      children?: React.FC<any>;
      item?: {
        childrenProps?: any;
        style?: CSSProperties;
        option?: {
          dimClose?: boolean;
          keyClose?: boolean;
        };
      };
    }) => void;
  };
}
