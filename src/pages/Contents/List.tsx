import { ContentsType } from "@/api/GetAPI/type";
import { TableButton, TableSort } from "@/common/components";
import { SortType } from "@/common/type";
import _ from "lodash";
import { Table } from "react-bootstrap";

const List = ({
  titleSort,
  subTitleSort,
  contents,
  onSortClick,
  onDeleteClick,
  onDetailClick,
}: {
  titleSort: SortType;
  subTitleSort: SortType;
  contents: ContentsType[];
  onSortClick: Function;
  onDeleteClick: Function;
  onDetailClick: Function;
}): React.ReactElement => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <TableSort
            sort={titleSort}
            title={"제목"}
            next={(sort: SortType) => onSortClick("title", sort)}
          />
          <TableSort
            sort={subTitleSort}
            title={"부제목"}
            next={(sort: SortType) => onSortClick("subTitle", sort)}
          />
          <th>이미지 유무</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(contents) &&
          contents.map((content: ContentsType, index: number) => {
            return (
              <tr key={`user_List_Key${index}`}>
                <td>{content.contentId}</td>
                <td>{content.title}</td>
                <td>{content.subTitle}</td>
                <td>{_.isEmpty(content.imageLink) ? "없음" : "있음"}</td>
                <TableButton
                  tdStyleItems={{
                    paddingRight: 1,
                  }}
                  title={"수정"}
                  next={() => onDetailClick({ type: "MODIFY", item: content })}
                />
                <TableButton
                  title={"삭제"}
                  next={() => onDeleteClick(content.contentId)}
                />
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default List;
