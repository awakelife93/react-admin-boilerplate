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
  } catch (error: unknown) {
    console.log("===============> findUserCount Error", error);
    throw error;
  }
};

export const findContentsCount = async ({
  searchKeyword = "",
}: {
  searchKeyword?: string;
}): Promise<number> => {
  try {
    return await getAPI("findContentsCount", { searchKeyword });
  } catch (error: unknown) {
    console.log("===============> findContentsCount Error", error);
    throw error;
  }
};

export const findComponentCount = async (): Promise<number> => {
  try {
    return await getAPI("findComponentCount");
  } catch (error: unknown) {
    console.log("===============> findComponentCount Error", error);
    throw error;
  }
};

export const findLayoutCount = async (): Promise<number> => {
  try {
    return await getAPI("findLayoutCount");
  } catch (error: unknown) {
    console.log("===============> findLayoutCount Error", error);
    throw error;
  }
};

export const findStyleCount = async (): Promise<number> => {
  try {
    return await getAPI("findStyleCount");
  } catch (error: unknown) {
    console.log("===============> findStyleCount Error", error);
    throw error;
  }
};

export const findThemeCount = async (): Promise<number> => {
  try {
    return await getAPI("findThemeCount");
  } catch (error: unknown) {
    console.log("===============> findThemeCount Error", error);
    throw error;
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
  } catch (error: unknown) {
    console.log("===============> findUser Error", error);
    throw error;
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
  } catch (error: unknown) {
    console.log("===============> findContents Error", error);
    throw error;
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
  } catch (error: unknown) {
    console.log("===============> findComponent Error", error);
    throw error;
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
  } catch (error: unknown) {
    console.log("===============> findLayout Error", error);
    throw error;
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
  } catch (error: unknown) {
    console.log("===============> findStyle Error", error);
    throw error;
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
  } catch (error: unknown) {
    console.log("===============> findTheme Error", error);
    throw error;
  }
};

export const findDashboardCount = async () => {
  try {
    return await getAPI("findDashboardCount");
  } catch (error: unknown) {
    console.log("===============> findDashboardCount Error", error);
    throw error;
  }
};

export const findUserProfile = async (): Promise<UserInfoIE> => {
  try {
    return await getAPI("findUserProfile");
  } catch (error: unknown) {
    console.log("===============> findUserProfile Error", error);
    throw error;
  }
};
