import { getAPI } from "..";
import { SortType } from "../../common/type";
import { UserInfoIE } from "../interface";
import {
  ContentsType,
  DesignComponentType,
  DesignLayoutType,
  DesignStyleType,
  DesignThemeType,
} from "./type";

export const findUserCount = async ({
  searchKeyword = "",
}: {
  searchKeyword?: string;
}): Promise<number> => {
  try {
    return await getAPI("findUserCount", { searchKeyword });
  } catch (e) {
    console.log("===============> findUserCount Error", e);
    throw e;
  }
};

export const findContentsCount = async ({
  searchKeyword = "",
}: {
  searchKeyword?: string;
}): Promise<number> => {
  try {
    return await getAPI("findContentsCount", { searchKeyword });
  } catch (e) {
    console.log("===============> findContentsCount Error", e);
    throw e;
  }
};

export const findComponentCount = async (): Promise<number> => {
  try {
    return await getAPI("findComponentCount");
  } catch (e) {
    console.log("===============> findComponentCount Error", e);
    throw e;
  }
};

export const findLayoutCount = async (): Promise<number> => {
  try {
    return await getAPI("findLayoutCount");
  } catch (e) {
    console.log("===============> findLayoutCount Error", e);
    throw e;
  }
};

export const findStyleCount = async (): Promise<number> => {
  try {
    return await getAPI("findStyleCount");
  } catch (e) {
    console.log("===============> findStyleCount Error", e);
    throw e;
  }
};

export const findThemeCount = async (): Promise<number> => {
  try {
    return await getAPI("findThemeCount");
  } catch (e) {
    console.log("===============> findThemeCount Error", e);
    throw e;
  }
};

export const findUser = async ({
  skip = 0,
  searchKeyword = "",
  userEmailSort,
  userNicknameSort,
}: {
  skip: number;
  searchKeyword?: string;
  userEmailSort?: SortType;
  userNicknameSort?: SortType;
}): Promise<[UserInfoIE[], number]> => {
  try {
    return await getAPI("findUser", {
      take: 20,
      skip,
      searchKeyword: searchKeyword ?? "",
      userEmailSort: userEmailSort ?? "",
      userNicknameSort: userNicknameSort ?? "",
    });
  } catch (e) {
    console.log("===============> findUser Error", e);
    throw e;
  }
};

export const findContents = async ({
  skip = 0,
  searchKeyword = "",
  contTitleSort,
  contSubTitleSort,
}: {
  skip: number;
  searchKeyword?: string;
  contTitleSort?: SortType;
  contSubTitleSort?: SortType;
}): Promise<[ContentsType[], number]> => {
  try {
    return await getAPI("findContents", {
      take: 20,
      skip,
      searchKeyword: searchKeyword ?? "",
      contTitleSort: contTitleSort ?? "",
      contSubTitleSort: contSubTitleSort ?? "",
    });
  } catch (e) {
    console.log("===============> findContents Error", e);
    throw e;
  }
};

export const findComponent = async ({
  skip = 0,
  searchKeyword = "",
  nameSort,
}: {
  skip: number;
  searchKeyword?: string;
  nameSort?: SortType;
}): Promise<[DesignComponentType[], number]> => {
  try {
    return await getAPI("findComponent", {
      take: 20,
      skip,
      searchKeyword: searchKeyword ?? "",
      nameSort: nameSort ?? "",
    });
  } catch (e) {
    console.log("===============> findComponent Error", e);
    throw e;
  }
};

export const findLayout = async ({
  skip = 0,
  searchKeyword = "",
  nameSort,
}: {
  skip: number;
  searchKeyword?: string;
  nameSort?: SortType;
}): Promise<[DesignLayoutType[], number]> => {
  try {
    return await getAPI("findLayout", {
      take: 20,
      skip,
      searchKeyword: searchKeyword ?? "",
      nameSort: nameSort ?? "",
    });
  } catch (e) {
    console.log("===============> findLayout Error", e);
    throw e;
  }
};

export const findStyle = async ({
  skip = 0,
  searchKeyword = "",
  nameSort,
}: {
  skip: number;
  searchKeyword?: string;
  nameSort?: SortType;
}): Promise<[DesignStyleType[], number]> => {
  try {
    return await getAPI("findStyle", {
      take: 20,
      skip,
      searchKeyword: searchKeyword ?? "",
      nameSort: nameSort ?? "",
    });
  } catch (e) {
    console.log("===============> findStyle Error", e);
    throw e;
  }
};

export const findTheme = async ({
  skip = 0,
  searchKeyword = "",
  nameSort,
}: {
  skip: number;
  searchKeyword?: string;
  nameSort?: SortType;
}): Promise<[DesignThemeType[], number]> => {
  try {
    return await getAPI("findTheme", {
      take: 20,
      skip,
      searchKeyword: searchKeyword ?? "",
      nameSort: nameSort ?? "",
    });
  } catch (e) {
    console.log("===============> findTheme Error", e);
    throw e;
  }
};

export const findDashboardCount = async () => {
  try {
    return await getAPI("findDashboardCount");
  } catch (e) {
    console.log("===============> findDashboardCount Error", e);
    throw e;
  }
};

export const findUserProfile = async (): Promise<UserInfoIE> => {
  try {
    return await getAPI("findUserProfile");
  } catch (e) {
    console.log("===============> findUserProfile Error", e);
    throw e;
  }
};
