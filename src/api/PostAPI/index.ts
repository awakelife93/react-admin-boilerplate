import { postAPI } from "..";
import { ContentsType } from "../GetAPI/type";
import { IUserInfo } from "../interface";

export const signIn = async ({
  userEmail,
  userPw,
}: {
  userEmail: string;
  userPw: string;
}): Promise<IUserInfo> => {
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
}): Promise<IUserInfo> => {
  try {
    return await postAPI("signUp", {
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
    return await postAPI("createContents", {
      contTitle,
      contSubTitle,
      contDesc,
    });
  } catch (error: unknown) {
    console.log("===============> createContents Error", error);
    throw error;
  }
};
