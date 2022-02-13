import _ from "lodash";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import { ContentsIE } from "../../api/GetAPI/interface";
import { updateContents } from "../../api/PatchAPI";
import { createContents } from "../../api/PutAPI";
import {
  Button,
  Container,
  Image,
  InputBox,
  Label,
  TextArea
} from "../../common/components";
import { ComponentIE } from "../../common/interface";
import { PageType } from "../../common/type";
import { I18nCommandEnum } from "../../core";
import { RoutePath } from "../../route/routes";
import { validationObject } from "../../utils";

/**
 * @description Contents Detail Component
 * @param {ComponentIE} props
 * @param {ContentsDetailPropsIE} location
 * @returns {React.ReactElement}
 */
interface ContentsDetailPropsIE extends ContentsIE {
  type: PageType;
}

// todo: 이미지 관련 로직 구현해놓기
const ContentsDetail: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state as ContentsDetailPropsIE;

  // Input
  const [contTitle, setContTitle] = useState(state.contTitle ?? "");
  const [contSubTitle, setContSubTitle] = useState(state.contSubTitle ?? "");
  const [contDesc, setContDesc] = useState(state.contDesc ?? "");
  const [contImageLink, setContImageLink] = useState(state.contImageLink ?? "");

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

  const history = useHistory();
  const _upsertContents = useCallback(async (): Promise<void> => {
    try {
      const item = {
        contTitle,
        contSubTitle,
        contDesc,
      };

      if (state.type === "MODIFY") {
        await updateContents({ contId: state.contId, ...item });
        history.push(RoutePath.CONTENTS);
      } else {
        // require value - title
        if (validationItem({ contTitle: item.contTitle })) {
          await createContents(item);
          history.push(RoutePath.CONTENTS);
        }
      }
    } catch (e) {
      console.log("_updateContents Error", e);
    }
  }, [
    state.type,
    state.contId,
    contTitle,
    contSubTitle,
    contDesc,
    history,
    validationItem,
  ]);

  const detailRender = useCallback((): React.ReactElement => {
    const buttonName =
      state.type === "CREATE"
        ? t(I18nCommandEnum.CREATE)
        : t(I18nCommandEnum.MODIFY);

    return (
      <Container.RowContainer
        style={{ width: "100%", justifyContent: "space-around" }}
      >
        {/* left area */}
        <Container.ColumnContainer>
          <Container.RowContainer
            style={{
              alignSelf: "flex-start",
            }}
          >
            <Label.CommonLabel>
              {t(I18nCommandEnum.CONTENTS_TITLE)}
            </Label.CommonLabel>
          </Container.RowContainer>
          <InputBox.CommonInputBox
            style={{
              padding: 5,
              marginBottom: 15,
            }}
            placeholder={t(I18nCommandEnum.CONTENTS_TITLE)}
            value={contTitle}
            onChange={(e) => setContTitle(e.target.value)}
          />
          {/**********************************************************/}
          <Container.RowContainer
            style={{
              alignSelf: "flex-start",
            }}
          >
            <Label.CommonLabel>
              {t(I18nCommandEnum.CONTENTS_SUB_TITLE)}
            </Label.CommonLabel>
          </Container.RowContainer>
          <InputBox.CommonInputBox
            style={{
              padding: 5,
              marginBottom: 15,
            }}
            placeholder={t(I18nCommandEnum.CONTENTS_SUB_TITLE)}
            value={contSubTitle}
            onChange={(e) => setContSubTitle(e.target.value)}
          />
          {/**********************************************************/}
          <Button.SubMitButton
            style={{
              margin: 10,
            }}
            onClick={_upsertContents}
          >
            {buttonName}
          </Button.SubMitButton>
        </Container.ColumnContainer>
        {/* right area */}
        <Container.ColumnContainer>
          {!_.isEmpty(contImageLink) && (
            <>
              <Container.RowContainer
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <Label.CommonLabel>
                  {t(I18nCommandEnum.CONTENTS_IMAGE)}
                </Label.CommonLabel>
              </Container.RowContainer>
              <Image.CommonImage
                style={{ width: 300, height: 200, marginBottom: 15 }}
                src={contImageLink}
              />
            </>
          )}
          <Container.RowContainer
            style={{
              alignSelf: "flex-start",
            }}
          >
            <Label.CommonLabel>
              {t(I18nCommandEnum.CONTENTS_DESC)}
            </Label.CommonLabel>
          </Container.RowContainer>
          <TextArea.CommonTextArea
            value={contDesc}
            onChange={(e) => setContDesc(e.target.value)}
            style={{ width: 300, height: 200, padding: 20 }}
          ></TextArea.CommonTextArea>
        </Container.ColumnContainer>
      </Container.RowContainer>
    );
  }, [
    state.type,
    contTitle,
    contSubTitle,
    contDesc,
    contImageLink,
    t,
    setContTitle,
    setContSubTitle,
    setContDesc,
    _upsertContents,
  ]);

  return (
    <Container.RowContainer
      style={{ justifyContent: "flex-start", width: "100%", margin: 20 }}
    >
      {detailRender()}
    </Container.RowContainer>
  );
};

export default ContentsDetail;
