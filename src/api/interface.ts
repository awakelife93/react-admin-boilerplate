/**
 * 공통 인터페이스만 작성
 */
export interface IUserInfo {
  userId: number;
  token: string;
  userEmail: string;
  userNickname: string;
  // todo: role 인터페이스 만들기
  userRoles: any[];
}

export interface ICommonDesign {
  _id: string;
  name: string;
  attribute?: object;
  styles?: string[];
  components?: string[];
  layouts?: string[];
  createdAt: string;
  updatedAt: string;
  isActive?: boolean;
  isDeleted: boolean;
}
