import _ from "lodash";
import { patchAPI } from "..";
import { UnknownObject } from "../../common/type";
import { ContentsType } from "../GetAPI/type";
import { UserInfoIE } from "../interface";

export const updateUser = async ({
  userId,
  userNickname,
  userPw,
  userRoleIds,
}: {
  userId: number;
  userNickname?: string;
  userPw?: string;
  userRoleIds?: number[];
}): Promise<UserInfoIE> => {
  try {
    const item: UnknownObject = { userId };

    if (!_.isEmpty(userNickname)) item.userNickname = userNickname;

    if (!_.isEmpty(userPw)) item.userPw = userPw;

    if (!_.isEmpty(userRoleIds)) item.userRoleIds = userRoleIds;

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
