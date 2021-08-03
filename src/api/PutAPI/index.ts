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
    let result: UserInfoIE = await putAPI("signUp", {
      userEmail,
      userNickname,
      userPw,
      userRoleIds,
    });
    return result;
  } catch (e) {
    console.log("===============> signUp Error", e);
    throw e;
  }
};
