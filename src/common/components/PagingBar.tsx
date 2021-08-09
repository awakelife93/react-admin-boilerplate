import _ from "lodash";
import { useCallback, useMemo } from "react";
import { Pagination, PageItem } from "react-bootstrap";

interface PagingBarIE {
  totalCount: number;
  limit: number;
  active: number;
  onPageClick: Function;
}

/**
 * PagingBar
 * @description 페이징 처리
 * @param {PagingBarIE} props
 * @returns {React.ReactElement}
 */
const PagingBar: React.FC<PagingBarIE> = (
  props: PagingBarIE
): React.ReactElement => {
  const { active, onPageClick, limit, totalCount } = props;

  const generatePageItem = useCallback((): React.ReactElement[] => {
    let item: any = [];

    for (let i = 0; i < Math.ceil(totalCount / limit); i++) {
      item.push(
        <PageItem
          key={`pageItem_List_${i}`}
          onClick={() => onPageClick(i)}
          active={i + 1 === active}
        >
          {i + 1}
        </PageItem>
      );
    }
    return item;
  }, [totalCount, limit, active, onPageClick]);

  const pageItem: React.ReactElement[] = useMemo(
    () => generatePageItem() ?? [],
    [totalCount, limit, active]
  );

  return (
    <Pagination>
      {!_.isEmpty(pageItem) &&
        pageItem.map((element: React.ReactElement) => {
          return element;
        })}
    </Pagination>
  );
};

export default PagingBar;
