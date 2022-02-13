import { Button, Container } from "../../common/components";
import { CommonColor, getSelectTabMenuStyle } from "../../common/styles";
import { DesignType } from "../../common/type";

const Tap = ({
  type,
  onTypeClick,
}: {
  type: DesignType;
  onTypeClick: Function;
}): React.ReactElement => {
  return (
    <Container.LayoutContainer style={{ marginBottom: 20 }}>
      <Button.TextButton
        style={{
          fontSize: 20,
          color: CommonColor.WHITE,
          ...getSelectTabMenuStyle(type, "component"),
        }}
        onClick={() => onTypeClick("component")}
      >
        컴포넌트
      </Button.TextButton>
      <Button.TextButton
        style={{
          fontSize: 20,
          color: CommonColor.WHITE,
          ...getSelectTabMenuStyle(type, "layout"),
        }}
        onClick={() => onTypeClick("layout")}
      >
        레이아웃
      </Button.TextButton>
      <Button.TextButton
        style={{
          fontSize: 20,
          color: CommonColor.WHITE,
          ...getSelectTabMenuStyle(type, "style"),
        }}
        onClick={() => onTypeClick("style")}
      >
        스타일
      </Button.TextButton>
      <Button.TextButton
        style={{
          fontSize: 20,
          color: CommonColor.WHITE,
          ...getSelectTabMenuStyle(type, "theme"),
        }}
        onClick={() => onTypeClick("theme")}
      >
        테마
      </Button.TextButton>
    </Container.LayoutContainer>
  );
};

export default Tap;
