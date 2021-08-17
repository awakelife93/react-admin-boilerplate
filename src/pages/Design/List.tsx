import _ from "lodash";
import { Table } from "react-bootstrap";
import { Button, Container, TableSort } from "../../common/components";
import { SortType } from "../../common/interface";

const ComponentList = (
  nameSort: SortType,
  components: any[],
  onSortClick: Function,
  onDeleteClick: Function,
  onDetailClick: Function
) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <TableSort
            sort={nameSort}
            title={"컴포넌트명"}
            next={(sort: SortType) => onSortClick(sort)}
          />
          <th>상태</th>
          <th colSpan={3}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(components) &&
          components.map((component: any, index: number) => {
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
  nameSort: SortType,
  layouts: any[],
  onSortClick: Function,
  onDeleteClick: Function,
  onDetailClick: Function
) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <TableSort
            sort={nameSort}
            title={"레이아웃명"}
            next={(sort: SortType) => onSortClick(sort)}
          />
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
  nameSort: SortType,
  styles: any[],
  onSortClick: Function,
  onDeleteClick: Function,
  onDetailClick: Function
) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <TableSort
            sort={nameSort}
            title={"스타일명"}
            next={(sort: SortType) => onSortClick(sort)}
          />
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
  nameSort: SortType,
  themes: any[],
  onSortClick: Function,
  onDeleteClick: Function,
  onDetailClick: Function
) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <TableSort
            sort={nameSort}
            title={"테마명"}
            next={(sort: SortType) => onSortClick(sort)}
          />
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
  nameSort,
  designs,
  onDeleteClick,
  onDetailClick,
  onSortClick,
  type,
}: {
  nameSort: SortType;
  type: "component" | "layout" | "style" | "theme";
  designs: any[];
  onDeleteClick: Function;
  onDetailClick: Function;
  onSortClick: Function;
}): React.ReactElement => {
  return (
    <Container.LayoutContainer>
      {type === "component" &&
        ComponentList(
          nameSort,
          designs,
          onSortClick,
          onDeleteClick,
          onDetailClick
        )}
      {type === "layout" &&
        LayoutList(
          nameSort,
          designs,
          onSortClick,
          onDeleteClick,
          onDetailClick
        )}
      {type === "style" &&
        StyleList(nameSort, designs, onSortClick, onDeleteClick, onDetailClick)}
      {type === "theme" &&
        ThemeList(nameSort, designs, onSortClick, onDeleteClick, onDetailClick)}
    </Container.LayoutContainer>
  );
};

export default List;
