import React from "react";
import { ComponentIE } from "../common/interface";
import { I18nCommandEnum } from "../core";
import ContentsPage from "../pages/Contents";
import ContentsDetailPage from "../pages/Contents/Detail";
import DashboardPage from "../pages/Dashboard";
import DesignPage from "../pages/Design";
import DesignDetailPage from "../pages/Design/Detail";
import SignInPage from "../pages/Sign";
import UserPage from "../pages/User";
import UserDetailPage from "../pages/User/Detail";

export enum RoutePath {
  DASHBOARD = "/",
  USER_LIST = "/user",
  USER_DETAIL = "/userDetail",
  DESIGN_LIST = "/design",
  DESIGN_DETAIL = "/designDetail",
  CONTENTS_LIST = "/contents",
  CONTENTS_DETAIL = "/contentsDetail",
  SIGN_IN = "/signIn",
}

export type RouteType = {
  path: RoutePath;
  exact: boolean;
  i18nKey: I18nCommandEnum | undefined;
  Component: React.FC<ComponentIE>;
};

const routes: RouteType[] = [
  {
    path: RoutePath.DASHBOARD,
    exact: true,
    i18nKey: I18nCommandEnum.DASHBOARD,
    Component: DashboardPage,
  },
  {
    path: RoutePath.USER_LIST,
    exact: false,
    i18nKey: I18nCommandEnum.USER_LIST,
    Component: UserPage,
  },
  {
    path: RoutePath.USER_DETAIL,
    exact: false,
    i18nKey: undefined,
    Component: UserDetailPage,
  },
  {
    path: RoutePath.CONTENTS_LIST,
    exact: false,
    i18nKey: I18nCommandEnum.CONTENTS_LIST,
    Component: ContentsPage,
  },
  {
    path: RoutePath.CONTENTS_DETAIL,
    exact: false,
    i18nKey: undefined,
    Component: ContentsDetailPage,
  },
  {
    path: RoutePath.DESIGN_LIST,
    exact: false,
    i18nKey: I18nCommandEnum.DESIGN_LIST,
    Component: DesignPage,
  },
  {
    path: RoutePath.DESIGN_DETAIL,
    exact: false,
    i18nKey: undefined,
    Component: DesignDetailPage,
  },
  {
    path: RoutePath.SIGN_IN,
    exact: false,
    i18nKey: undefined,
    Component: SignInPage,
  },
];

export default routes;
