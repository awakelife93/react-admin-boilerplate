import _ from "lodash";
import React, { useCallback } from "react";
import { CSSProperties } from "styled-components";
import { Button } from ".";
import { CommonColor } from "../styles";

interface TableButtonIE {
  title: string;
  next: Function;
  buttonStyleItems?: CSSProperties;
  containerStyleItems?: {
    hoverBackgroundColor?: string;
    defaultBackgroundColor?: string;
    activeBackgroundColor?: string;
  };
}

/**
 * TableButton
 * @description 테이블 리스트 버튼 컴포넌트
 * @param {TableButtonIE} props
 * @returns {React.ReactElement}
 */
const TableButton: React.FC<TableButtonIE> = (
  props: TableButtonIE
): React.ReactElement => {
  const { title, next, buttonStyleItems, containerStyleItems } = props;

  const _next = useCallback((): void => {
    if (_.isFunction(next)) {
      next();
    }
  }, [next]);

  return (
    <td onClick={_next} style={{ padding: 0, border: 0 }}>
      <Button.DynamicColorButton
        style={{
          padding: "0.75rem",
          width: "100%",
          height: "100%",
          border: `1px solid ${CommonColor.WHITE}`,
          ...buttonStyleItems,
        }}
        hoverBackgroundColor={
          !_.isUndefined(containerStyleItems?.hoverBackgroundColor)
            ? containerStyleItems?.hoverBackgroundColor
            : CommonColor.HEADER_COLOR
        }
        activeBackgroundColor={
          !_.isUndefined(containerStyleItems?.activeBackgroundColor)
            ? containerStyleItems?.activeBackgroundColor
            : CommonColor.BODY_COLOR
        }
        defaultBackgroundColor={
          !_.isUndefined(containerStyleItems?.defaultBackgroundColor)
            ? containerStyleItems?.defaultBackgroundColor
            : CommonColor.TRANS_PARENT
        }
      >
        {title}
      </Button.DynamicColorButton>
    </td>
  );
};

export default React.memo(TableButton);
