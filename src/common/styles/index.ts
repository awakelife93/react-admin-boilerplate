import { CSSProperties } from "styled-components";
import CommonColor from "./color";
import CommonImage from "./image";

/**
 * getSelectTabMenuStyle
 * @param {string} unknownObject - 동적 대상
 * @param {string} target - 타겟
 * @returns {CSSProperties}
 */
const getSelectTabMenuStyle = (
  unknownObject: string,
  target: string
): CSSProperties => {
  return {
    fontWeight: unknownObject === target ? "bold" : 400,
    borderBottom:
      unknownObject === target ? `1px solid ${CommonColor.WHITE}` : "",
  };
};
export { CommonColor, CommonImage, getSelectTabMenuStyle };
