import { CSSProperties } from "styled-components";

export interface CommonComponentIE extends CSSProperties {
  /**
   * style과 requireStyle은 props로 던지지 않고 default style만 사용할 경우도 있기 때문에 없을수가 있다.
   */
  style?: CSSProperties;
  requireStyle?: CSSProperties;
}

export interface PagingIE {
  target: {
    ref: React.MutableRefObject<any>;
    callback: Function | null;
    page: number;
  };
  observer?: {
    threshold?: number;
  };
}
