import { Container, Label } from "../..";
import { CommonColor } from "../../../styles";

type MessageLayoutType = {
  message: string;
}

const MessageLayout: React.FC<MessageLayoutType> = (props: MessageLayoutType) => {
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
