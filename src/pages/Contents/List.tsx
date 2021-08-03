import _ from "lodash";
import { Table } from "react-bootstrap";
import { ContentsIE } from "../../api/GetAPI/interface";
import { Button, TableSort } from "../../common/components";
import { SortType } from "../../common/interface";

const List = ({
  contTitleSort,
  contSubTitleSort,
  contents,
  onSortClick,
  onDeleteClick,
  onDetailClick,
}: {
  contTitleSort: SortType;
  contSubTitleSort: SortType;
  contents: ContentsIE[];
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
            sort={contTitleSort}
            title={"제목"}
            next={(sort: SortType) => onSortClick("contTitle", sort)}
          />
          <TableSort
            sort={contSubTitleSort}
            title={"부제목"}
            next={(sort: SortType) => onSortClick("contSubTitle", sort)}
          />
          <th>이미지 유무</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(contents) &&
          contents.map((cont: ContentsIE, index: number) => {
            return (
              <tr key={`user_List_Key${index}`}>
                <td>{cont.contId}</td>
                <td>{cont.contTitle}</td>
                <td>{cont.contSubTitle}</td>
                <td>{_.isEmpty(cont.contImageLink) ? "없음" : "있음"}</td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() =>
                      onDetailClick({ type: "MODIFY", item: cont })
                    }
                  >
                    수정
                  </Button.TextButton>
                </td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => onDeleteClick(cont.contId)}
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
export default List;
