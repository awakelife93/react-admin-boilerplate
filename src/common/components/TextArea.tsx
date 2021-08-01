import styled from "styled-components";
import { CommonColor } from "../styles";
import { CommonComponentIE, ScrollComponentIE } from "./interface";

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
