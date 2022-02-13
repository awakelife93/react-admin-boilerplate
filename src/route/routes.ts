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
  USER = "/user",
  USER_DETAIL = "/userDetail",
  DESIGN = "/design",
  DESIGN_DETAIL = "/designDetail",
  CONTENTS = "/contents",
  CONTENTS_DETAIL = "/contentsDetail",
  SIGN_IN = "/signIn",
}
export interface RouteIE {
  path: RoutePath;
  exact: boolean;
  i18nKey: I18nCommandEnum | undefined;
  Component: React.FC<ComponentIE>;
}

const routes: RouteIE[] = [
  {
    path: RoutePath.DASHBOARD,
    exact: true,
    i18nKey: I18nCommandEnum.DASHBOARD,
    Component: DashboardPage,
  },
  {
    path: RoutePath.USER,
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
    path: RoutePath.CONTENTS,
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
    path: RoutePath.DESIGN,
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
