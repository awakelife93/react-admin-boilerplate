/**
 * 공통 인터페이스만 작성
 */
export interface UserInfoIE {
  userId: number;
  token: string;
  userEmail: string;
  userNickname: string;
  // todo: role 인터페이스 만들기
  userRoles: any[];
}