import _ from "lodash";
import React, { useCallback } from "react";
import { Icon, Label } from ".";
import { SortType } from "../interface";
import { CommonColor } from "../styles";
import { DynamicColorContainer } from "./Container";

interface TableSortIE {
  sort: SortType;
  title: string;
  next: Function;
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
 * @param {TableSortIE} props
 * @returns {React.ReactElement}
 */
const TableSort: React.FC<TableSortIE> = (
  props: TableSortIE
): React.ReactElement => {
  // false = desc, true = asc
  const {
    sort,
    title,
    next,
    containerStyleItems,
    textStyleItems,
    UpIcon,
    DownIcon,
  } = props;

  const onClickSort = useCallback(() => {
    const _sort = sort === "DESC" ? "ASC" : "DESC";

    if (_.isFunction(next)) {
      next(_sort);
    }
  }, [sort, next]);

  return (
    <th onClick={() => onClickSort()} style={{ padding: 0 }}>
      <DynamicColorContainer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: ".75rem",
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
          !_.isEmpty(UpIcon) === true ? (
            UpIcon
          ) : (
            <Icon.FaArrowCircleUp />
          )
        ) : !_.isEmpty(DownIcon) === true ? (
          DownIcon
        ) : (
          <Icon.FaArrowCircleDown />
        )}
      </DynamicColorContainer>
    </th>
  );
};

export default React.memo(TableSort);
