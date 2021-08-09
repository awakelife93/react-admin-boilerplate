import _ from "lodash";
import { patchAPI } from "..";
import { ContentsIE } from "../GetAPI/interface";
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
    const item: any = { userId };

    if (!_.isEmpty(userNickname)) item.userNickname = userNickname;

    if (!_.isEmpty(userPw)) item.userPw = userPw;

    if (!_.isEmpty(userRoleIds)) item.userRoleIds = userRoleIds;

    return await patchAPI("updateUser", { ...item });
  } catch (e) {
    console.log("===============> updateUser Error", e);
    throw e;
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
}): Promise<ContentsIE> => {
  try {
    const item: any = { contId };

    if (!_.isEmpty(contTitle)) item.contTitle = contTitle;

    if (!_.isEmpty(contSubTitle)) item.contSubTitle = contSubTitle;

    if (!_.isEmpty(contDesc)) item.contDesc = contDesc;

    return await patchAPI("updateContents", { ...item });
  } catch (e) {
    console.log("===============> updateContents Error", e);
    throw e;
  }
};
