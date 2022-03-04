import { UnknownObject } from "@/common/type";
import _ from "lodash";
import { patchAPI } from "..";
import { ContentsType } from "../GetAPI/type";
import { IUserInfo, UserRoleType } from "../interface";

export const updateUser = async ({
  userId,
  name,
  password,
  role,
}: {
  userId: number;
  name?: string;
  password?: string;
  role?: UserRoleType;
}): Promise<IUserInfo> => {
  try {
    const item: UnknownObject = { userId };

    if (!_.isEmpty(name)) item.name = name;

    if (!_.isEmpty(password)) item.password = password;

    if (!_.isEmpty(role)) item.role = role;

    return await patchAPI("updateUser", { ...item });
  } catch (error: unknown) {
    console.log("===============> updateUser Error", error);
    throw error;
  }
};

export const updateContents = async ({
  contId,
  contTitle,
  contSubTitle,
  contDesc,
}: {
  contId: number;
  contTitle?: string;
  contSubTitle?: string;
  contDesc?: string;
}): Promise<ContentsType> => {
  try {
    const item: UnknownObject = { contId };

    if (!_.isEmpty(contTitle)) item.contTitle = contTitle;

    if (!_.isEmpty(contSubTitle)) item.contSubTitle = contSubTitle;

    if (!_.isEmpty(contDesc)) item.contDesc = contDesc;

    return await patchAPI("updateContents", { ...item });
  } catch (error: unknown) {
    console.log("===============> updateContents Error", error);
    throw error;
  }
};
