import React from "react";
import { useTranslation } from "react-i18next";
import { I18nCommandEnum } from "../../../../core/i18n";
import { Button, Container, Icon, MenuBox } from "../../../components";
import { CommonColor } from "../../../styles";

type IconMenuType = {
  _routePush: Function;
  _setLanguage: Function;
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
  const { _routePush, _setLanguage } = props;

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
        onClick={() => _routePush("/")}
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
          // 최대한 공통으로 따고 싶은 스타일이지만, 애가 어디에 위치할지 몰라서
          // props로 던지자...

          // 애는 테마와 전혀 상관이 없어서 Theme에 안넣는다.
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
        onClick={(lng: string) => _setLanguage(lng)}
      />
    </Container.RowContainer>
  );
};

export default React.memo(IconMenu);
