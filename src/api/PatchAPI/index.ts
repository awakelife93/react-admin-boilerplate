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
  contentId,
  title,
  subTitle,
  description,
}: {
  contentId: number;
  title?: string;
  subTitle?: string;
  description?: string;
}): Promise<ContentsType> => {
  try {
    const item: UnknownObject = { contentId };

    if (!_.isEmpty(title)) item.title = title;

    if (!_.isEmpty(subTitle)) item.subTitle = subTitle;

    if (!_.isEmpty(description)) item.description = description;

    return await patchAPI("updateContents", { ...item });
  } catch (error: unknown) {
    console.log("===============> updateContents Error", error);
    throw error;
  }
};
