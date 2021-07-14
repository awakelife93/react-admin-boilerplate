import { putAPI } from "..";
import { UserInfoIE } from "../interface";

export const signUp = async ({
  userEmail,
  userNickname,
  userPw,
}: {
  userEmail: string;
  userNickname: string;
  userPw: string;
}) => {
  try {
    let result: UserInfoIE = await putAPI("signUp", {
      userEmail,
      userNickname,
      userPw,
    });
    return result;
  } catch (e) {
    console.log("===============> signUp Error", e);
    throw e;
  }
};
