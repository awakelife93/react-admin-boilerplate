import { ContentsType } from "@/api/GetAPI/type";
import { updateContents } from "@/api/PatchAPI";
import { createContents } from "@/api/PostAPI";
import { Button, Container, Image, InputBox, Label, TextArea } from "@/common/components";
import { IComponent } from "@/common/interface";
import { PageType, UnknownObject } from "@/common/type";
import { I18nCommandEnum } from "@/core";
import { RoutePath } from "@/route/routes";
import { validationObject } from "@/utils";
import _ from "lodash";
import { ChangeEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * @description Contents Detail Component
 * @param {IComponent} props
 * @param {IContentsDetailProps} location
 * @returns {React.ReactElement}
 */
interface IContentsDetailProps extends ContentsType {
  type: PageType;
}

// todo: 이미지 관련 로직 구현해놓기
const ContentsDetail: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state as IContentsDetailProps;

  const [title, setTitle] = useState(state.title ?? "");
  const [subTitle, setSubTitle] = useState(state.subTitle ?? "");
  const [description, setDescription] = useState(state.description ?? "");
  const [imageLink, setImageLink] = useState(state.imageLink ?? "");

  const showMessageModal = (message: string): void => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        type: "MESSAGE",
        item: {
          childrenProps: { message },
        },
      });
    }
  };

  const validationItem = useCallback((item: UnknownObject): boolean => {
    if (!validationObject(item)) {
      showMessageModal("컨텐츠 정보를 확인해주시기 바랍니다.");
      return false;
    }

    return true;
  }, []);

  const navigate = useNavigate();
  const _upsertContents = useCallback(async (): Promise<void> => {
    try {
      const item = {
        title,
        subTitle,
        description,
      };

      if (state.type === "MODIFY") {
        await updateContents({ contentId: state.contentId, ...item });
        navigate(RoutePath.CONTENTS_LIST);
      } else {
        if (validationItem({ title: item.title })) {
          await createContents(item);
          navigate(RoutePath.CONTENTS_LIST);
        }
      }
    } catch (error: unknown) {
      console.log("_updateContents Error", error);
    }
  }, [
    state.type,
    state.contentId,
    title,
    subTitle,
    description,
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
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
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
            value={subTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSubTitle(e.target.value)}
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
          {!_.isEmpty(imageLink) && (
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
                src={imageLink}
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
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            style={{ width: 300, height: 200, padding: 20 }}
          ></TextArea.CommonTextArea>
        </Container.ColumnContainer>
      </Container.RowContainer>
    );
  }, [
    state.type,
    title,
    subTitle,
    description,
    imageLink,
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
