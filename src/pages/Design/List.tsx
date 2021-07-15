import _ from "lodash";
import { Container } from "../../common/components";
import { Table } from "react-bootstrap";

// 이쪽 화면 기획해보기
// 도저히 리스트로 뿌리기엔 복잡한 데이터 구조라서 단순 속성들과 그것에 대한 상세는 모달 or 상세 화면으로 객체 형식으로 보여줄지 고민중
const ComponentList = (components: any[]) => {
  console.log(components);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>컴포넌트 이름</th>
          <th>속성</th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(components) &&
          components.map((component: any, index: number) => {
            // 서버단에서 임시로 만든 데이터 구조로 불러오기 때문에 변수명을 temp로 명명
            // 클라이언트에서 데이터 삽입이 가능해지면 이쪽 부분 수정할 예정
            const tempArray =
              component.attribute && Object.keys(component.attribute);
            return tempArray.map((attribute: any, idx: number) => {
              const tempArray2 = Object.keys(component.attribute[attribute]);
              return (
                <tr key={`component_List_Key${idx}`}>
                  <td>{attribute}</td>
                  {!_.isEmpty(tempArray2) &&
                    tempArray2.map((styles: any) => {
                      return <td>{styles}</td>;
                    })}
                </tr>
              );
            });
          })}
      </tbody>
    </Table>
  );
};

const List = ({
  type,
  designs,
}: {
  type: "component" | "layout" | "style" | "theme";
  designs: any[];
}): React.ReactElement => {
  return (
    <Container.LayoutContainer>
      {type === "component" && ComponentList(designs)}
    </Container.LayoutContainer>
  );
};

export default List;
