import React from "react";

import DashboardPage from "../pages/Dashboard";
import UserPage from "../pages/User";
import DesignPage from "../pages/Design";
import ContentsPage from "../pages/Contents";
import SignInPage from "../pages/Sign";

import { ComponentIE } from "../common/interface";

export enum RoutePath {
  DASHBOARD = "/",
  USER = "/user",
  DESIGN = "/design",
  CONTENTS = "/contents",
  SIGN_IN = "/signIn",
  SIGN_UP = "/signUp",
}
export interface RouteIE {
  path: string;
  exact: boolean;
  title: string;
  Component: React.FC<ComponentIE>;
}

const routes: RouteIE[] = [
  {
    path: RoutePath.DASHBOARD,
    exact: true,
    title: "대시보드",
    Component: DashboardPage,
  },
  {
    path: RoutePath.USER,
    exact: false,
    title: "유저 관리",
    Component: UserPage,
  },
  {
    path: RoutePath.CONTENTS,
    exact: false,
    title: "컨텐츠 관리",
    Component: ContentsPage,
  },
  {
    path: RoutePath.DESIGN,
    exact: false,
    title: "디자인 관리",
    Component: DesignPage,
  },
  {
    path: RoutePath.SIGN_IN,
    exact: false,
    title: "",
    Component: SignInPage,
  },
];

export default routes;
