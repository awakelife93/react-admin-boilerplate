import { Button, Container, Icon, MenuBox } from "@/common/components";
import { CommonColor } from "@/common/styles";
import { I18nCommandEnum } from "@/core";
import { RoutePath } from "@/route/routes";
import React from "react";
import { useTranslation } from "react-i18next";

type IconMenuType = {
  routePush: (routePath: RoutePath) => void;
  setLanguage: (lng: string) => void;
}

/**
 * @description Header Icons Component
 * @param {IconMenuType} props
 * @returns {React.ReactElement}
 */
const IconMenu: React.FC<IconMenuType> = (
  props: IconMenuType
): React.ReactElement => {
  const { t } = useTranslation();
  const { routePush, setLanguage } = props;

  return (
    <Container.RowContainer
      style={{
        alignItems: "center",
      }}
    >
      <Button.TextButton
        style={{
          fontSize: 35,
        }}
        onClick={() => routePush(RoutePath.DASHBOARD)}
      >
        React Admin Project
      </Button.TextButton>
      <MenuBox
        children={
          <Icon.GiWorld
            style={{
              color: CommonColor.WHITE,
              marginLeft: 20,
              cursor: "pointer",
            }}
            size={20}
          />
        }
        menuContainerStyle={{
          // * 최대한 공통으로 따고 싶은 스타일이지만, 애가 어디에 위치할지 몰라서
          // * props로 던지자...

          // * 애는 테마와 전혀 상관이 없어서 Theme에 안넣는다.
          backgroundColor: CommonColor.WHITE,
          border: `1px solid ${CommonColor.DARK}`,
          borderRadius: 15,
          width: 150,
          height: 30,
          marginLeft: 20,
          position: "absolute",
          top: 60,
        }}
        menuItemStyle={{
          fontSize: 15,
          marginRight: 5,
        }}
        renderItems={[
          {
            displayName: t(I18nCommandEnum.KO),
            value: "ko",
          },
          {
            displayName: t(I18nCommandEnum.EN),
            value: "en",
          },
        ]}
        onClick={(lng: string) => setLanguage(lng)}
      />
    </Container.RowContainer>
  );
};

export default React.memo(IconMenu);
