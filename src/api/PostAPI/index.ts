import { postAPI } from "..";
import { UserInfoIE } from "../interface";

export const signIn = async ({
  userEmail,
  userPw,
}: {
  userEmail: string;
  userPw: string;
}) => {
  try {
    let result: UserInfoIE = await postAPI("signInAdmin", {
      userEmail,
      userPw,
    });
    return result;
  } catch (e) {
    console.log("===============> signIn Error", e);
    throw e;
  }
};

export const signOut = async () => {
  try {
    let result: object = await postAPI("signOut");
    return result;
  } catch (e) {
    console.log("===============> signOut Error", e);
    throw e;
  }
};
