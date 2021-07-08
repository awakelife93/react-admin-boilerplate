import { getAPI } from "..";
import { defaultPagingCount } from "../../common/const";
import { UserInfoIE } from "../interface";
import { ContentsIE } from "./interface";

export const findTheme = async () => {
  try {
    const result: any = await getAPI("findTheme");
    return result;
  } catch (e) {
    console.log("===============> findTheme Error", e);
    throw e;
  }
};

export const findContents = async (skip: number = 0) => {
  try {
    // typeorm 엔티티의 take, skip을 그대로 전송하기 위해 프로퍼티를 지어줌.
    const result: ContentsIE[] = await getAPI("findContents", {
      take: defaultPagingCount,
      skip,
    });
    return result;
  } catch (e) {
    console.log("===============> findContents Error", e);
    throw e;
  }
};

export const findUserProfile = async () => {
  try {
    const result: UserInfoIE = await getAPI("findUserProfile");
    return result;
  } catch (e) {
    console.log("===============> findUserProfile Error", e);
    throw e;
  }
};
