import { Container, Label } from "../..";

interface MessageLayoutIE {
  message: string;
}

const MessageLayout: React.FC<MessageLayoutIE> = (props: MessageLayoutIE) => {
  const { message } = props;
  return (
    <Container.ColumnContainer>
      <Label.CommonLabel
        style={{
          fontWeight: "bold",
        }}
      >
        {message}
      </Label.CommonLabel>
    </Container.ColumnContainer>
  );
};

export default MessageLayout;
