import { putAPI } from "..";
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
  } catch (e) {
    console.log("===============> signUp Error", e);
    throw e;
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
}): Promise<UserInfoIE> => {
  try {
    return await putAPI("createContents", {
      contTitle,
      contSubTitle,
      contDesc,
    });
  } catch (e) {
    console.log("===============> createContents Error", e);
    throw e;
  }
};
