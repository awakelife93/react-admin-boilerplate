import { Container, Label } from "../../common/components";
import { CommonColor } from "../../common/styles";

const Dashboard = () => {
  return (
    <Container.LayoutContainer>
      <Container.RowContainer>
        {/*  */}
        <Container.ColumnContainer style={{ marginRight: 20 }}>
          <Label.CommonLabel style={{ fontSize: 20 }}>
            총 유저수
          </Label.CommonLabel>
          <Container.ColumnContainer
            style={{
              width: 200,
              height: 150,
              border: `1px solid ${CommonColor.GRAY}`,
              borderRadius: 15,
            }}
          >
            <Label.CommonLabel style={{ fontSize: 40, fontWeight: "bold" }}>
              5000
            </Label.CommonLabel>
            <Label.CommonLabel style={{ fontSize: 15 }}>
              사용자 : 4980
            </Label.CommonLabel>
            <Label.CommonLabel style={{ fontSize: 15 }}>
              관리자 : 20
            </Label.CommonLabel>
          </Container.ColumnContainer>
        </Container.ColumnContainer>
        {/*  */}
        <Container.ColumnContainer style={{ marginRight: 20 }}>
          <Label.CommonLabel style={{ fontSize: 20 }}>
            총 테마 수
          </Label.CommonLabel>
          <Container.ColumnContainer
            style={{
              width: 200,
              height: 150,
              border: `1px solid ${CommonColor.GRAY}`,
              borderRadius: 15,
            }}
          >
            <Label.CommonLabel style={{ fontSize: 40, fontWeight: "bold" }}>
              5000
            </Label.CommonLabel>
            <Label.CommonLabel style={{ fontSize: 15 }}>
              레이아웃: 50
            </Label.CommonLabel>
            <Label.CommonLabel style={{ fontSize: 15 }}>
              컴포넌트: 18000
            </Label.CommonLabel>
            <Label.CommonLabel style={{ fontSize: 15 }}>
              스타일: 38
            </Label.CommonLabel>
          </Container.ColumnContainer>
        </Container.ColumnContainer>
        {/*  */}
        <Container.ColumnContainer>
          <Label.CommonLabel style={{ fontSize: 20 }}>
            총 컨텐츠 수
          </Label.CommonLabel>
          <Container.ColumnContainer
            style={{
              width: 200,
              height: 150,
              border: `1px solid ${CommonColor.GRAY}`,
              borderRadius: 15,
            }}
          >
            <Label.CommonLabel style={{ fontSize: 40, fontWeight: "bold" }}>
              5000
            </Label.CommonLabel>
          </Container.ColumnContainer>
        </Container.ColumnContainer>
      </Container.RowContainer>

      {/* 여기는 추가적인 차트나 그래프 넣을 곳 */}
    </Container.LayoutContainer>
  );
};

export default Dashboard;
