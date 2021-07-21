import styled from "styled-components";
import { CommonColor } from "../styles";
import { CommonComponentIE } from "./interface";

interface CommonSelectBoxIE extends CommonComponentIE {}
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
