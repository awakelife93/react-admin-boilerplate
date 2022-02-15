import _ from "lodash";
import { Table } from "react-bootstrap";
import { Container, TableButton, TableSort } from "../../common/components";
import { DesignType, SortType } from "../../common/type";

const ComponentList = (
  nameSort: SortType,
  components: any[],
  onSortClick: Function,
  onDeleteClick: Function,
  onDetailClick: Function
): React.ReactElement => {
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
                <td>{component.isDeleted ? "삭제" : "사용 중"}</td>
                <TableButton
                  tdStyleItems={{
                    paddingRight: 1,
                  }}
                  title={"수정"}
                  next={() =>
                    onDetailClick({
                      type: "MODIFY",
                      item: component,
                      designType: "component",
                    })
                  }
                />
                <TableButton
                  title={"삭제"}
                  next={() => onDeleteClick(component._id)}
                />
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
): React.ReactElement => {
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
          <th colSpan={3}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(layouts) &&
          layouts.map((layout: any, index: number) => {
            return (
              <tr key={`layout_List_Key${index}`}>
                <td>{layout.name}</td>
                <td>{layout.isDeleted ? "삭제" : "사용 중"}</td>
                <TableButton
                  tdStyleItems={{
                    paddingRight: 1,
                  }}
                  title={"수정"}
                  next={() =>
                    onDetailClick({
                      type: "MODIFY",
                      item: layout,
                      designType: "layout",
                    })
                  }
                />
                <TableButton
                  title={"삭제"}
                  next={() => onDeleteClick(layout._id)}
                />
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
): React.ReactElement => {
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
          <th colSpan={3}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(styles) &&
          styles.map((style: any, index: number) => {
            return (
              <tr key={`style_List_Key${index}`}>
                <td>{style.name}</td>
                <td>{style.isDeleted ? "삭제" : "사용 중"}</td>
                <TableButton
                  tdStyleItems={{
                    paddingRight: 1,
                  }}
                  title={"수정"}
                  next={() =>
                    onDetailClick({
                      type: "MODIFY",
                      item: style,
                      designType: "style",
                    })
                  }
                />
                <TableButton
                  title={"삭제"}
                  next={() => onDeleteClick(style._id)}
                />
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
): React.ReactElement => {
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
          <th colSpan={3}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(themes) &&
          themes.map((theme: any, index: number) => {
            return (
              <tr key={`theme_List_Key${index}`}>
                <td>{theme.name}</td>
                <td>{theme.isDeleted ? "삭제" : "사용 중"}</td>
                <TableButton
                  tdStyleItems={{
                    paddingRight: 1,
                  }}
                  title={"수정"}
                  next={() =>
                    onDetailClick({
                      type: "MODIFY",
                      item: theme,
                      designType: "theme",
                    })
                  }
                />
                <TableButton
                  title={"삭제"}
                  next={() => onDeleteClick(theme._id)}
                />
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
  type: DesignType;
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
