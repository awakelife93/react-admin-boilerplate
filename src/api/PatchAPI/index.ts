import _ from "lodash";
import { patchAPI } from "..";
import { UserInfoIE } from "../interface";

export const updateUser = async ({
  id,
  nickname,
  password,
}: {
  id: number;
  nickname: string;
  password: string;
}) => {
  try {
    const item: any = { id };

    if (!_.isEmpty(nickname)) item.nickname = nickname;
    if (!_.isEmpty(password)) item.password = password;

    let result: UserInfoIE = await patchAPI("updateUser", { ...item });
    return result;
  } catch (e) {
    console.log("===============> updateUser Error", e);
    throw e;
  }
};
