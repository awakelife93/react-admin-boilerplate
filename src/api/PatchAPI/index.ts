import _ from "lodash";
import { patchAPI } from "..";
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
}) => {
  try {
    const item: any = { userId };

    if (!_.isEmpty(userNickname)) item.userNickname = userNickname;

    if (!_.isEmpty(userPw)) item.userPw = userPw;

    if (!_.isEmpty(userRoleIds)) item.userRoleIds = userRoleIds;

    let result: UserInfoIE = await patchAPI("updateUser", { ...item });
    return result;
  } catch (e) {
    console.log("===============> updateUser Error", e);
    throw e;
  }
};
