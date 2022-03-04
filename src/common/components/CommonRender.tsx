import { UserRoleType } from "@/api/interface";
import { isAdmin, isUser } from "@/utils";
import { CSSProperties } from "styled-components";
import { Container, InputBox, Label } from ".";
import { PageType } from "../type";

export const DefaultFC: React.FC = (): React.ReactElement => {
  return <></>;
};

export const DefaultUserRoleFC = ({
  type,
  style,
  role,
  onClickRole,
}: {
  type: PageType;
  style?: CSSProperties;
  role: UserRoleType;
  onClickRole: Function;
}): React.ReactElement => {
  return (
    <Container.RowContainer style={{ ...style }}>
      <Container.RowContainer style={{ paddingRight: 20 }}>
        <Label.CommonLabel style={{ paddingRight: 10 }}>
          사용자
        </Label.CommonLabel>
        <InputBox.RadioBox
          checked={type === "CREATE" ? true : isUser(role)}
          onClick={() => onClickRole("user")}
          readOnly
        />
      </Container.RowContainer>

      <Container.RowContainer>
        <Label.CommonLabel style={{ paddingRight: 10 }}>
          관리자
        </Label.CommonLabel>
        <InputBox.RadioBox
          checked={type === "CREATE" ? false : isAdmin(role)}
          onClick={() => onClickRole("admin")}
          readOnly
        />
      </Container.RowContainer>
    </Container.RowContainer>
  );
};
