import { putAPI } from "..";
import { ContentsType } from "../GetAPI/type";
import { UserInfoIE } from "../interface";

export const signUp = async ({
  userEmail,
  userNickname,
  userPw,
  userRoleIds,
}: {
  userEmail: string;
  userNickname: string;
  userPw: string;
  userRoleIds: number[];
}): Promise<UserInfoIE> => {
  try {
    return await putAPI("signUp", {
      userEmail,
      userNickname,
      userPw,
      userRoleIds,
    });
  } catch (error: unknown) {
    console.log("===============> signUp Error", error);
    throw error;
  }
};

export const createContents = async ({
  contTitle,
  contSubTitle,
  contDesc,
}: {
  contTitle: string;
  contSubTitle: string;
  contDesc: string;
}): Promise<ContentsType> => {
  try {
    return await putAPI("createContents", {
      contTitle,
      contSubTitle,
      contDesc,
    });
  } catch (error: unknown) {
    console.log("===============> createContents Error", error);
    throw error;
  }
};
