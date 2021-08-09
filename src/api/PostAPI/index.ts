import { postAPI } from "..";
import { UserInfoIE } from "../interface";

export const signIn = async ({
  userEmail,
  userPw,
}: {
  userEmail: string;
  userPw: string;
}): Promise<UserInfoIE> => {
  try {
    return await postAPI("signInAdmin", {
      userEmail,
      userPw,
    });
  } catch (e) {
    console.log("===============> signIn Error", e);
    throw e;
  }
};

export const signOut = async (): Promise<object> => {
  try {
    return await postAPI("signOut");
  } catch (e) {
    console.log("===============> signOut Error", e);
    throw e;
  }
};
