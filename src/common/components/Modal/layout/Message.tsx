import { Container, Label } from "../..";
import { ComponentStyleIE } from "../../../interface";

interface MessageLayoutIE {
  componentStyles: ComponentStyleIE;
  message: string;
}

const MessageLayout: React.FC<MessageLayoutIE> = (props: MessageLayoutIE) => {
  const { componentStyles, message } = props;
  return (
    <Container.ColumnContainer>
      <Label.CommonLabel
        style={{
          ...componentStyles.COMMON_LABEL,
          fontWeight: "bold",
        }}
      >
        {message}
      </Label.CommonLabel>
    </Container.ColumnContainer>
  );
};

export default MessageLayout;
