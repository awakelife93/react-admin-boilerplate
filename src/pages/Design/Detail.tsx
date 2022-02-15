import _ from "lodash";
import { ChangeEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { CommonDesignIE } from "../../api/interface";
import { Button, Container, InputBox, Label } from "../../common/components";
import { ComponentIE } from "../../common/interface";
import { CommonColor } from "../../common/styles";
import { DesignType, PageType } from "../../common/type";
import { I18nCommandEnum } from "../../core";
import { validationObject } from "../../utils";

/**
 * @description Design Detail Component
 * 개발중
 * todo:
 * 1. 무한대로 늘어나는 attribute depth를 어떻게 처리할 것인가 고민해보기
 * 1-1. 대부분은 2 depth로 끝나는 CSS들이지만, 애니메이션은 보통 2depth를 넘어감
 * 2. 수정 상태 - Attribute 추가 / 삭제 기능 넣기
 * 3. 생성 상태 구현하기
 * 4. CSS 값을 어떻게 유효성 검사할지... 고민 해보기
 * 4-1. 이상한 값을 넣을 수 없도록 CSS 입력 컴포넌트를 넣을지?
 * 4-2. 별도로 임의의 테스트 컴포넌트에 값을 전달하여 에러가 나는지 체크할지?
 * 4-3. 스타일과 테마는 컴포넌트와 레이아웃 ID 유효성 검사 API 추가 해줘야함.
 * 5. 사용 유무 필드 추가하기
 * @param {ComponentIE} props
 * @param {DesignDetailPropsIE} location
 * @returns {React.ReactElement}
 */
interface DesignDetailPropsIE extends CommonDesignIE {
  type: PageType;
  designType: DesignType;
}

const DesignDetail: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state as DesignDetailPropsIE;

  // Input
  const [designName, setDesignName] = useState(state.name ?? "");
  const [componentOrLayoutAttribute, setComponentOrLayoutAttribute] = useState<{
    [index: string]: any;
  }>({ ...state.attribute } ?? {});
  const [styleOrThemeAttribute, setStyleOrThemeAttribute] = useState<{
    components: string[];
    layouts: string[];
    styles: string[];
  }>({
    components: state.components ?? [],
    layouts: state.layouts ?? [],
    styles: state.styles ?? [],
  });

  const _showMessageModal = (message: string): void => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        type: "MESSAGE",
        item: {
          childrenProps: { message },
        },
      });
    }
  };

  const validationItem = useCallback((item: any): boolean => {
    if (!validationObject(item)) {
      _showMessageModal("컨텐츠 정보를 확인해주시기 바랍니다.");
      return false;
    }

    return true;
  }, []);

  const componentOrLayoutAttributeRender = (): React.ReactElement[] | null => {
    if (_.isEmpty(state.attribute)) return null;

    const attribute: any = state.attribute ?? {};
    const keys = Object.keys(attribute);

    return keys.map((key: string, index: number) => {
      const attributeValue = attribute[key];

      if (_.isString(attributeValue)) {
        return (
          <Container.ColumnContainer
            key={`componentOrLayoutAttributeRender_List_Key${index}`}
            style={{
              width: "100%",
            }}
          >
            <Container.RowContainer
              style={{
                width: "100%",
                justifyContent: "space-between",
                padding: 5,
                marginBottom: 15,
              }}
            >
              <Label.CommonLabel style={{ fontWeight: "bold", marginRight: 8 }}>
                {key}
              </Label.CommonLabel>
              <InputBox.CommonInputBox
                defaultValue={attribute[key]}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setComponentOrLayoutAttribute({
                    ...componentOrLayoutAttribute,
                    [key]: e.target.value,
                  })
                }
              />
            </Container.RowContainer>
          </Container.ColumnContainer>
        );
      } else {
        const keys = Object.keys(attributeValue);
        return (
          <Container.ColumnContainer
            key={`componentOrLayoutAttributeRender_List_Key${index}`}
            style={{
              width: "100%",
            }}
          >
            <Container.RowContainer
              style={{
                alignSelf: "center",
              }}
            >
              <Label.CommonLabel style={{ fontWeight: "bold" }}>
                {key}
              </Label.CommonLabel>
            </Container.RowContainer>
            {keys.map((attributeValueKey: string, index: number) => {
              return (
                <Container.RowContainer
                  key={`attribute_value_LikeKey${index}`}
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                    padding: 5,
                    marginBottom: 15,
                  }}
                >
                  <Label.CommonLabel
                    style={{ fontWeight: "bold", marginRight: 8 }}
                  >
                    {attributeValueKey}
                  </Label.CommonLabel>
                  <InputBox.CommonInputBox
                    defaultValue={
                      componentOrLayoutAttribute[key][attributeValueKey]
                    }
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setComponentOrLayoutAttribute({
                        ...componentOrLayoutAttribute,
                        [key]: {
                          ...componentOrLayoutAttribute[key],
                          [attributeValueKey]: e.target.value,
                        },
                      });
                    }}
                  />
                </Container.RowContainer>
              );
            })}
          </Container.ColumnContainer>
        );
      }
    });
  };

  const styleOrThemeAttributeRender = (): any => {
    if (state.designType === "style") {
      const components = state.components ?? [];
      const layouts = state.layouts ?? [];

      return (
        <Container.RowContainer>
          <Container.ColumnContainer
            style={{ alignSelf: "flex-start", marginRight: 10 }}
          >
            <Container.RowContainer
              style={{
                alignSelf: "center",
              }}
            >
              <Label.CommonLabel>{"Component 리스트"}</Label.CommonLabel>
            </Container.RowContainer>
            {components.map((componentId: string, index: number) => {
              return (
                <InputBox.CommonInputBox
                  key={`component_list_key${index}`}
                  style={{
                    padding: 5,
                    marginBottom: 15,
                  }}
                  defaultValue={styleOrThemeAttribute.components[index]}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const _components: string[] = [
                      ...styleOrThemeAttribute.components,
                    ];
                    _components[index] = e.target.value;
                    setStyleOrThemeAttribute({
                      ...styleOrThemeAttribute,
                      components: _components,
                    });
                  }}
                />
              );
            })}
          </Container.ColumnContainer>
          <Container.ColumnContainer style={{ alignSelf: "flex-start" }}>
            <Container.RowContainer
              style={{
                alignSelf: "center",
              }}
            >
              <Label.CommonLabel>{"Layout 리스트"}</Label.CommonLabel>
            </Container.RowContainer>
            {layouts.map((layoutId: string, index: number) => {
              return (
                <InputBox.CommonInputBox
                  key={`layout_list_key${index}`}
                  style={{
                    padding: 5,
                    marginBottom: 15,
                  }}
                  defaultValue={styleOrThemeAttribute.layouts[index]}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const _layouts: string[] = [
                      ...styleOrThemeAttribute.layouts,
                    ];
                    _layouts[index] = e.target.value;
                    setStyleOrThemeAttribute({
                      ...styleOrThemeAttribute,
                      layouts: _layouts,
                    });
                  }}
                />
              );
            })}
          </Container.ColumnContainer>
        </Container.RowContainer>
      );
    }

    const styles = state.styles ?? [];
    return (
      <Container.ColumnContainer
        style={{ alignSelf: "flex-start", marginRight: 10 }}
      >
        <Container.RowContainer
          style={{
            alignSelf: "center",
          }}
        >
          <Label.CommonLabel>{"Style 리스트"}</Label.CommonLabel>
        </Container.RowContainer>
        {styles.map((styleId: string, index: number) => {
          return (
            <InputBox.CommonInputBox
              key={`style_list_key${index}`}
              style={{
                padding: 5,
                marginBottom: 15,
              }}
              defaultValue={styleOrThemeAttribute.styles[index]}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const _styles: string[] = [...styleOrThemeAttribute.styles];
                _styles[index] = e.target.value;
                setStyleOrThemeAttribute({
                  ...styleOrThemeAttribute,
                  styles: _styles,
                });
              }}
            />
          );
        })}
      </Container.ColumnContainer>
    );
  };

  const detailRender = useCallback((): React.ReactElement => {
    const buttonName =
      state.type === "CREATE"
        ? t(I18nCommandEnum.CREATE)
        : t(I18nCommandEnum.MODIFY);

    return (
      <Container.RowContainer style={{ width: "100%" }}>
        <Container.ColumnContainer>
          <Container.RowContainer
            style={{
              alignSelf: "center",
            }}
          >
            <Label.CommonLabel>
              {t(I18nCommandEnum.DESIGN_ID)}
            </Label.CommonLabel>
          </Container.RowContainer>
          <InputBox.CommonInputBox
            disabled={true}
            style={{
              padding: 5,
              marginBottom: 15,
            }}
            value={state._id}
          />
          {/**********************************************************/}
          <Container.RowContainer
            style={{
              alignSelf: "center",
            }}
          >
            <Label.CommonLabel>
              {t(I18nCommandEnum.DESIGN_NAME, {
                type: state.designType.toUpperCase(),
              })}
            </Label.CommonLabel>
          </Container.RowContainer>
          <InputBox.CommonInputBox
            style={{
              padding: 5,
              marginBottom: 15,
            }}
            placeholder={t(I18nCommandEnum.DESIGN_NAME, {
              type: state.designType.toUpperCase(),
            })}
            value={designName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDesignName(e.target.value)}
          />
          <Container.RowContainer
            style={{
              width: "100%",
              marginTop: 5,
              marginBottom: 5,
              borderBottom: `1px solid ${CommonColor.WHITE}`,
            }}
          />
          {/**********************************************************/}
          {(state.designType === "component" ||
            state.designType === "layout") &&
            componentOrLayoutAttributeRender()}
          {(state.designType === "style" || state.designType === "theme") &&
            styleOrThemeAttributeRender()}
          {/**********************************************************/}
          <Button.SubMitButton
            style={{
              margin: 10,
            }}
            // onClick={_upsertDesign}
          >
            {buttonName}
          </Button.SubMitButton>
        </Container.ColumnContainer>
      </Container.RowContainer>
    );
  }, [state.type, t]);

  return (
    <Container.RowContainer
      style={{ justifyContent: "flex-start", width: "100%", margin: 20 }}
    >
      {detailRender()}
    </Container.RowContainer>
  );
};

export default DesignDetail;
