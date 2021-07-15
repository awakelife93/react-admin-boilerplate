import { Container, Button } from "../../common/components";
import { CommonColor } from "../../common/styles";

const Tap = ({
  type,
  onTypeClick,
}: {
  type: "component" | "layout" | "style" | "theme";
  onTypeClick: Function;
}): React.ReactElement => {
  return (
    <Container.LayoutContainer>
      <Button.TextButton
        style={{
          fontSize: 20,
          color: CommonColor.DARK,
          fontWeight: type === "component" ? "bold" : 100,
        }}
        onClick={() => onTypeClick("component")}
      >
        컴포넌트
      </Button.TextButton>
      <Button.TextButton
        style={{
          fontSize: 20,
          color: CommonColor.DARK,
          fontWeight: type === "layout" ? "bold" : 100,
        }}
        onClick={() => onTypeClick("layout")}
      >
        레이아웃
      </Button.TextButton>
      <Button.TextButton
        style={{
          fontSize: 20,
          color: CommonColor.DARK,
          fontWeight: type === "style" ? "bold" : 100,
        }}
        onClick={() => onTypeClick("style")}
      >
        스타일
      </Button.TextButton>
      <Button.TextButton
        style={{
          fontSize: 20,
          color: CommonColor.DARK,
          fontWeight: type === "theme" ? "bold" : 100,
        }}
        onClick={() => onTypeClick("theme")}
      >
        테마
      </Button.TextButton>
    </Container.LayoutContainer>
  );
};
export default Tap;
