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
  } catch (error: unknown) {
    console.log("===============> signIn Error", error);
    throw error;
  }
};

export const signOut = async (): Promise<object> => {
  try {
    return await postAPI("signOut");
  } catch (error: unknown) {
    console.log("===============> signOut Error", error);
    throw error;
  }
};
