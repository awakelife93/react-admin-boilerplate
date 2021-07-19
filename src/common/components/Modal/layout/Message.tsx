import { Container, Label } from "../..";
import { CommonColor } from "../../../styles";

interface MessageLayoutIE {
  message: string;
}

const MessageLayout: React.FC<MessageLayoutIE> = (props: MessageLayoutIE) => {
  const { message } = props;
  return (
    <Container.ColumnContainer>
      <Label.CommonLabel
        style={{
          color: CommonColor.BLACK,
          fontWeight: "bold",
        }}
      >
        {message}
      </Label.CommonLabel>
    </Container.ColumnContainer>
  );
};

export default MessageLayout;
