import { postAPI } from "..";
import { ContentsType } from "../GetAPI/type";
import { IUserInfo, UserRoleType } from "../interface";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<IUserInfo> => {
  try {
    return await postAPI("signInAdmin", {
      email,
      password,
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
  email,
  name,
  password,
  role,
}: {
  email: string;
  name: string;
  password: string;
  role: UserRoleType;
}): Promise<IUserInfo> => {
  try {
    return await postAPI("signUp", {
      email,
      name,
      password,
      role,
    });
  } catch (error: unknown) {
    console.log("===============> signUp Error", error);
    throw error;
  }
};

export const createContents = async ({
  title,
  subTitle,
  description,
}: {
  title: string;
  subTitle: string;
  description: string;
}): Promise<ContentsType> => {
  try {
    return await postAPI("createContents", {
      title,
      subTitle,
      description,
    });
  } catch (error: unknown) {
    console.log("===============> createContents Error", error);
    throw error;
  }
};
