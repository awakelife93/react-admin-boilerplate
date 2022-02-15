import _ from "lodash";
import React, { useCallback } from "react";
import { CSSProperties } from "styled-components";
import { Icon, Label } from ".";
import { CommonColor } from "../styles";
import { SortType } from "../type";
import { DynamicColorContainer } from "./Container";

type TableSortType = {
  sort: SortType;
  title: string;
  next: Function;
  buttonStyleItems?: CSSProperties;
  containerStyleItems?: {
    hoverBackgroundColor?: string;
    defaultBackgroundColor?: string;
    activeBackgroundColor?: string;
  };
  textStyleItems?: {};
  UpIcon?: React.ReactElement;
  DownIcon?: React.ReactElement;
}

/**
 * TableSort
 * @description 테이블 정렬 컴포넌트
 * @param {TableSortType} props
 * @returns {React.ReactElement}
 */
const TableSort: React.FC<TableSortType> = (
  props: TableSortType
): React.ReactElement => {
  // false = desc, true = asc
  const {
    sort,
    title,
    next,
    buttonStyleItems,
    containerStyleItems,
    textStyleItems,
    UpIcon,
    DownIcon,
  } = props;

  const onClickSort = useCallback((): void => {
    const _sort = sort === "DESC" ? "ASC" : "DESC";

    if (_.isFunction(next)) {
      next(_sort);
    }
  }, [sort, next]);

  return (
    <th onClick={() => onClickSort()} style={{ padding: 0, cursor: "pointer" }}>
      <DynamicColorContainer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: ".75rem",
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
        <Label.CommonLabel style={{ ...textStyleItems }}>
          {title}
        </Label.CommonLabel>
        {sort === "DESC" ? (
          !_.isEmpty(UpIcon) ? (
            UpIcon
          ) : (
            <Icon.FaArrowCircleUp />
          )
        ) : !_.isEmpty(DownIcon) ? (
          DownIcon
        ) : (
          <Icon.FaArrowCircleDown />
        )}
      </DynamicColorContainer>
    </th>
  );
};

export default React.memo(TableSort);
