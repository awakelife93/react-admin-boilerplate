export type UserRoleType = "user" | "admin";

/**
 * 공통 인터페이스만 작성
 */
export interface IUserInfo {
  userId: number;
  token: string;
  email: string;
  name: string;
  role: UserRoleType;
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
