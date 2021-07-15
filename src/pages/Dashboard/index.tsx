import { useCallback, useState } from "react";
import { useEffect } from "react";
import { findDashboardCount } from "../../api/GetAPI";
import { Container, Label } from "../../common/components";
import { ComponentIE } from "../../common/interface";
import { CommonColor } from "../../common/styles";

/**
 * @description Dashboard Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */

const Dashboard: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const [dashboardCount, setDashboardCount] = useState({
    totalUser: 0,
    clientUser: 0,
    adminUser: 0,
    totalContent: 0,
  });

  useEffect(() => {
    getDashboardCount();
  }, []);

  const getDashboardCount = useCallback(async () => {
    const result = await findDashboardCount();
    setDashboardCount({
      totalUser: result.usersCount.total,
      clientUser: result.usersCount.client,
      adminUser: result.usersCount.admin,
      totalContent: result.contentsCount.total,
    });
  }, []);

  return (
    <Container.LayoutContainer style={{ margin: 50 }}>
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
              {dashboardCount.totalUser}
            </Label.CommonLabel>
            <Label.CommonLabel style={{ fontSize: 15 }}>
              사용자 : {dashboardCount.clientUser}
            </Label.CommonLabel>
            <Label.CommonLabel style={{ fontSize: 15 }}>
              관리자 : {dashboardCount.adminUser}
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
              {0}
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
              {dashboardCount.totalContent}
            </Label.CommonLabel>
          </Container.ColumnContainer>
        </Container.ColumnContainer>
      </Container.RowContainer>

      {/* 여기는 추가적인 차트나 그래프 넣을 곳 */}
    </Container.LayoutContainer>
  );
};

export default Dashboard;
