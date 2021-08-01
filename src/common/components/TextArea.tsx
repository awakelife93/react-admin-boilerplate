import styled from "styled-components";
import { CommonColor } from "../styles";
import { CommonComponentIE, ScrollComponentIE } from "./interface";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */
interface CommonTextAreaIE extends CommonComponentIE, ScrollComponentIE {}
export const CommonTextArea = styled.textarea`
  /* scroll style */
  ::-webkit-scrollbar {
    width: ${(props: CommonTextAreaIE) => props.scrollStyles?.width ?? "6px"};
  }
  /* scroll을 감싸는 컨테이너 */
  ::-webkit-scrollbar-track {
    background-color: ${(props: CommonTextAreaIE) =>
      props.trackStyles?.backgroundColor ?? CommonColor.TRANS_PARENT};
  }

  /* 움직이는 scroll 객체 */
  ::-webkit-scrollbar-thumb {
    border-radius: ${(props: CommonTextAreaIE) =>
      props.thumbStyles?.borderRadius ?? "4px"};
    background-color: ${(props: CommonTextAreaIE) =>
      props.thumbStyles?.backgroundColor ?? "rgba(0, 0, 0, 0.24)"};
  }
`;
