import { CSSProperties } from "styled-components";

export type DynamicColorComponentType = {
  hoverBackgroundColor: string;
  activeBackgroundColor: string;
  defaultBackgroundColor: string;
};

export type ScrollComponentType = {
  scrollStyles: CSSProperties;
  trackStyles: CSSProperties;
  thumbStyles: CSSProperties;
};

export type CommonComponentType = {
  /**
   * style과 requireStyle은 props로 던지지 않고 default style만 사용할 경우도 있기 때문에 없을수가 있다.
   */
  style: CSSProperties;
  requireStyle: CSSProperties;
};
