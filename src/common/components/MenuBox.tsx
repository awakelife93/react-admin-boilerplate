import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { CSSProperties } from "styled-components";
import { Container } from "../components";

type ItemType = {
  displayName: string;
  value: any;
}

type MenuBoxType = {
  renderItems: ItemType[];
  renderType?: "row" | "column";
  children: React.ReactElement;
  onClick: Function;
  menuContainerStyle: CSSProperties;
  menuItemStyle: CSSProperties;
}

/**
 * MenuBox
 * @description 컴포넌트에 달라붙는 메뉴 박스
 * @param {MenuBoxType} props
 * @returns {React.ReactElement}
 */
const MenuBox: React.FC<MenuBoxType> = (
  props: MenuBoxType
): React.ReactElement | null => {
  const [isShowMenuBox, setShowMenuBox] = useState(false);
  const {
    children,
    menuContainerStyle,
    menuItemStyle,
    onClick,
    renderItems,
    renderType = "row",
  } = props;

  const checkOutSideClick = useCallback((event: MouseEvent): void => {
    setShowMenuBox(false);
  }, []);

  useEffect(() => {
    if (isShowMenuBox) {
      window.addEventListener("click", checkOutSideClick);
    }

    return () => window.removeEventListener("click", checkOutSideClick);
  }, [isShowMenuBox, checkOutSideClick]);

  const renderLayout = (): React.ReactElement => {
    // * item이 수평으로 나열
    if (renderType === "row") {
      return (
        <Container.RowContainer style={{ ...menuContainerStyle }}>
          {renderItems.map((item: ItemType, idx: number) => {
            return (
              <Container.RowContainer
                key={`MenuBox_Row_Item_${idx}`}
                style={{
                  ...menuItemStyle,
                  cursor: "pointer",
                }}
                onClick={() => onClick(item.value)}
              >
                {item.displayName}
              </Container.RowContainer>
            );
          })}
        </Container.RowContainer>
      );
      // * item이 수직으로 나열
    } else {
      return (
        <Container.ColumnContainer style={{ ...menuContainerStyle }}>
          {renderItems.map((item: ItemType, idx: number) => {
            return (
              <Container.RowContainer
                key={`MenuBox_Row_Item_${idx}`}
                style={{
                  ...menuItemStyle,
                  cursor: "pointer",
                }}
                onClick={() => onClick(item.value)}
              >
                {item.displayName}
              </Container.RowContainer>
            );
          })}
        </Container.ColumnContainer>
      );
    }
  };

  if (_.isEmpty(children) || _.isEmpty(renderItems)) {
    return null;
  }
  
  return (
    <Container.ColumnContainer
      onClick={() => setShowMenuBox(!isShowMenuBox)}
      style={{ zIndex: 1, alignItems: "flex-start" }}
    >
      {children}
      {isShowMenuBox && renderLayout()}
    </Container.ColumnContainer>
  );
};

export default MenuBox;
