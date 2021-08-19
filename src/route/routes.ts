import React from "react";

import DashboardPage from "../pages/Dashboard";
import UserPage from "../pages/User";
import UserDetailPage from "../pages/User/Detail";
import DesignPage from "../pages/Design";
import DesignDetailPage from "../pages/Design/Detail";
import ContentsPage from "../pages/Contents";
import ContentsDetailPage from "../pages/Contents/Detail";
import SignInPage from "../pages/Sign";

import { ComponentIE } from "../common/interface";

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
  path: string;
  exact: boolean;
  i18nKey: string;
  Component: React.FC<ComponentIE>;
}

const routes: RouteIE[] = [
  {
    path: RoutePath.DASHBOARD,
    exact: true,
    i18nKey: "dashboard",
    Component: DashboardPage,
  },
  {
    path: RoutePath.USER,
    exact: false,
    i18nKey: "user_list",
    Component: UserPage,
  },
  {
    path: RoutePath.USER_DETAIL,
    exact: false,
    i18nKey: "",
    Component: UserDetailPage,
  },
  {
    path: RoutePath.CONTENTS,
    exact: false,
    i18nKey: "contents_list",
    Component: ContentsPage,
  },
  {
    path: RoutePath.CONTENTS_DETAIL,
    exact: false,
    i18nKey: "",
    Component: ContentsDetailPage,
  },
  {
    path: RoutePath.DESIGN,
    exact: false,
    i18nKey: "design_list",
    Component: DesignPage,
  },
  {
    path: RoutePath.DESIGN_DETAIL,
    exact: false,
    i18nKey: "",
    Component: DesignDetailPage,
  },
  {
    path: RoutePath.SIGN_IN,
    exact: false,
    i18nKey: "",
    Component: SignInPage,
  },
];

export default routes;
