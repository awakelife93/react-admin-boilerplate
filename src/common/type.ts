export type UnknownObject<T = unknown> = Record<string, T>;

/**
 * 디자인 타입
 */
export type DesignType = "component" | "layout" | "style" | "theme";

/**
 * 상세 화면을 구성하는 타입
 */
export type PageType = "CREATE" | "MODIFY";

/**
 * 리스트 정렬 타입
 */
export type SortType = "DESC" | "ASC" | undefined;
