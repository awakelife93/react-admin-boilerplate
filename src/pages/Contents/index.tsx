import { useCallback, useEffect, useState } from "react";
import { findContents, findContentsCount } from "../../api/GetAPI";
import { ContentsIE } from "../../api/GetAPI/interface";
import { Container, PagingBar } from "../../common/components";
import { defaultPagingCount } from "../../common/const";
import { ComponentIE } from "../../common/interface";
import List from "./List";

/**
 * @description Contents Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Contents: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const [contents, setContents] = useState<ContentsIE[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [active, setActive] = useState(1);

  // init
  useEffect(() => {
    if (totalCount === 0) {
      getContentsCount();
    }

    if (contents.length === 0) {
      getContentsList(0);
    }
  }, [contents.length, totalCount]);

  /**
   * Contents List의 Total Count를 가져온다.
   */
  const getContentsCount = useCallback(async () => {
    const totalCount = await findContentsCount();
    setTotalCount(totalCount);
  }, [totalCount]);

  /**
   * Contents 정보들을 가져온다.
   */
  const getContentsList = useCallback(
    async (skip: number) => {
      const contents = await findContents({ skip });
      setContents(contents);
    },
    [contents.length]
  );

  /**
   * Page Click Event
   */
  const onPageClick = useCallback(
    (page: number) => {
      setActive(page + 1);
      getContentsList(page * defaultPagingCount);
    },
    [active]
  );

  return (
    <Container.LayoutContainer>
      <List contents={contents} />
      <PagingBar
        totalCount={totalCount}
        limit={defaultPagingCount}
        active={active}
        onPageClick={onPageClick}
      />
    </Container.LayoutContainer>
  );
};

export default Contents;
