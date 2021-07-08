import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { CSSProperties } from "styled-components";
import { Container } from "../components";
import { defaultShowModal } from "../const";

interface ItemIE {
  displayName: string;
  value: any;
}

interface MenuBoxIE {
  renderItems: ItemIE[];
  renderType?: "row" | "column";
  children: React.ReactElement;
  onClick: Function;
  menuContainerStyle: CSSProperties;
  menuItemStyle: CSSProperties;
}

const MenuBox: React.FC<MenuBoxIE> = (props: MenuBoxIE) => {
  const [isShowMenuBox, setShowMenuBox] = useState(false);
  const {
    children,
    menuContainerStyle,
    menuItemStyle,
    onClick,
    renderItems,
    renderType = "row",
  } = props;

  useEffect(() => {
    if (isShowMenuBox === true) {
      window.addEventListener("click", checkOutSideClick);
    }

    return () => window.removeEventListener("click", checkOutSideClick);
  }, [isShowMenuBox]);

  const checkOutSideClick = useCallback((event: any) => {
    // 어느 영역을 눌러도 종료가 되게끔...
    setShowMenuBox(defaultShowModal);
  }, []);

  const renderLayout = () => {
    // item이 수평으로 나열
    if (renderType === "row") {
      return (
        <Container.RowContainer style={{ ...menuContainerStyle }}>
          {renderItems.map((item: ItemIE, idx: number) => {
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
      // item이 수직으로 나열
    } else {
      return (
        <Container.ColumnContainer style={{ ...menuContainerStyle }}>
          {renderItems.map((item: ItemIE, idx: number) => {
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

  if (
    // MenuBox가 뿌리 삼을 컴포넌트가 없다면?
    _.isEmpty(children) ||
    // Item이 없다면?
    !_.isArray(renderItems) ||
    renderItems.length === 0
  ) {
    return null;
  } else {
    return (
      <Container.ColumnContainer
        onClick={() => setShowMenuBox(!isShowMenuBox)}
        style={{ zIndex: 1 }}
      >
        {children}
        {isShowMenuBox === true && renderLayout()}
      </Container.ColumnContainer>
    );
  }
};

export default MenuBox;
