import { putAPI } from "..";
import { UserInfoIE } from "../interface";

export const signUp = async ({
  email,
  nickname,
  password,
}: {
  email: string;
  nickname: string;
  password: string;
}) => {
  try {
    let result: UserInfoIE = await putAPI("signUp", {
      email,
      nickname,
      password,
    });
    return result;
  } catch (e) {
    console.log("===============> signUp Error", e);
    throw e;
  }
};
