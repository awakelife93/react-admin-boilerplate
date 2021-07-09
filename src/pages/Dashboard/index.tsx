import { Container, Label } from "../../common/components";

const Dashboard = () => {
  return (
    <Container.LayoutContainer style={{ padding: 50 }}>
      <Container.ColumnContainer>
        <Label.CommonLabel style={{ fontSize: 20 }}>
          총 유저수
        </Label.CommonLabel>
        <Label.CommonLabel style={{ fontSize: 20 }}>
          총 컨텐츠 수
        </Label.CommonLabel>
        <Label.CommonLabel style={{ fontSize: 20 }}>
          총 테마 수
        </Label.CommonLabel>
      </Container.ColumnContainer>
    </Container.LayoutContainer>
  );
};

export default Dashboard;
