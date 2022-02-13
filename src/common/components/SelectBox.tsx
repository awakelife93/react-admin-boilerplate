import styled from "styled-components";
import { CommonColor } from "../styles";
import { CommonComponentType } from "./type";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */
interface CommonSelectBoxIE extends Partial<CommonComponentType> {}
export const CommonSelectBox = styled.select`
  width: ${(props: CommonSelectBoxIE) => props.style?.width ?? "300px"};
  height: ${(props: CommonSelectBoxIE) => props.style?.height ?? "40px"};
  padding: ${(props: CommonSelectBoxIE) => props.style?.padding ?? "0px"};
  margin: ${(props: CommonSelectBoxIE) => props.style?.margin ?? "0px"};
  border: ${(props: CommonSelectBoxIE) =>
    props.style?.border ?? `1px solid ${CommonColor.GRAY}`};
  border-radius: ${(props: CommonSelectBoxIE) =>
    props.style?.borderRadius ?? "0.25em"};
  margin-bottom: ${(props: CommonSelectBoxIE) =>
    props.style?.marginBottom ?? "0px"};
`;
