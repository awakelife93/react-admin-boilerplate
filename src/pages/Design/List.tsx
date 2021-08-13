import _ from "lodash";
import { Button, Container } from "../../common/components";
import { Table } from "react-bootstrap";

const ComponentList = (
  components: any[],
  onDeleteClick: Function,
  onDetailClick: Function
) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>컴포넌트명</th>
          <th>상태</th>
          <th colSpan={3}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(components) &&
          components.map((component: any, index: number) => {
            console.log(component);
            return (
              <tr key={`component_List_Key${index}`}>
                <td>{component.name}</td>
                <td>{component.isDeleted === true ? "삭제" : "사용"}</td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() =>
                      alert("모달로 상세 내용 대신하여 보여줄까 생각 중")
                    }
                  >
                    보기
                  </Button.TextButton>
                </td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => onDetailClick({ type: "MODIFY", item: {} })}
                  >
                    수정
                  </Button.TextButton>
                </td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => onDeleteClick(component._id)}
                  >
                    삭제
                  </Button.TextButton>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

const LayoutList = (
  layouts: any[],
  onDeleteClick: Function,
  onDetailClick: Function
) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>레이아웃명</th>
          <th>상태</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(layouts) &&
          layouts.map((layout: any, index: number) => {
            return (
              <tr key={`layout_List_Key${index}`}>
                <td>{layout.name}</td>
                <td>{layout.isDeleted === true ? "삭제" : "사용"}</td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() =>
                      alert("모달로 상세 내용 대신하여 보여줄까 생각 중")
                    }
                  >
                    보기
                  </Button.TextButton>
                </td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => onDetailClick({ type: "MODIFY", item: {} })}
                  >
                    수정
                  </Button.TextButton>
                </td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => onDeleteClick(layout._id)}
                  >
                    삭제
                  </Button.TextButton>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

const StyleList = (
  styles: any[],
  onDeleteClick: Function,
  onDetailClick: Function
) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>스타일명</th>
          <th>상태</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(styles) &&
          styles.map((style: any, index: number) => {
            return (
              <tr key={`style_List_Key${index}`}>
                <td>{style.name}</td>
                <td>{style.isDeleted === true ? "삭제" : "사용"}</td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => onDetailClick({ type: "MODIFY", item: {} })}
                  >
                    수정
                  </Button.TextButton>
                </td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => onDeleteClick(style._id)}
                  >
                    삭제
                  </Button.TextButton>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

const ThemeList = (
  themes: any[],
  onDeleteClick: Function,
  onDetailClick: Function
) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>테마명</th>
          <th>상태</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(themes) &&
          themes.map((theme: any, index: number) => {
            return (
              <tr key={`theme_List_Key${index}`}>
                <td>{theme.name}</td>
                <td>{theme.isDeleted === true ? "삭제" : "사용"}</td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => onDetailClick({ type: "MODIFY", item: {} })}
                  >
                    수정
                  </Button.TextButton>
                </td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => onDeleteClick(theme._id)}
                  >
                    삭제
                  </Button.TextButton>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

const List = ({
  type,
  designs,
  onDeleteClick,
  onDetailClick,
}: {
  type: "component" | "layout" | "style" | "theme";
  designs: any[];
  onDeleteClick: Function;
  onDetailClick: Function;
}): React.ReactElement => {
  return (
    <Container.LayoutContainer>
      {type === "component" &&
        ComponentList(designs, onDeleteClick, onDetailClick)}
      {type === "layout" && LayoutList(designs, onDeleteClick, onDetailClick)}
      {type === "style" && StyleList(designs, onDeleteClick, onDetailClick)}
      {type === "theme" && ThemeList(designs, onDeleteClick, onDetailClick)}
    </Container.LayoutContainer>
  );
};

export default List;
