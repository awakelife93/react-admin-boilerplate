import React from "react";

import Dashboard from "../pages/Dashboard";
import User from "../pages/User";
import Design from "../pages/Design";
import Contents from "../pages/Contents";

import { ComponentIE } from "../common/interface";

export enum RoutePath {
  DASHBOARD = "/",
  USER = "/user",
  DESIGN = "/design",
  CONTENTS = "/contents",
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
    Component: Dashboard,
  },
  {
    path: RoutePath.USER,
    exact: true,
    title: "유저 관리",
    Component: User,
  },
  {
    path: RoutePath.CONTENTS,
    exact: true,
    title: "컨텐츠 관리",
    Component: Contents,
  },
  {
    path: RoutePath.DESIGN,
    exact: true,
    title: "디자인 관리",
    Component: Design,
  },
];

export default routes;
