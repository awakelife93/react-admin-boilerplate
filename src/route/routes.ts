import React from "react";

import Dashboard from "../pages/Dashboard";
import { ComponentIE } from "../common/interface";

export enum RoutePath {
  DASHBOARD = "/",
}
export interface RouteIE {
  path: string;
  exact: boolean;
  title: string;
  Component: React.FC<ComponentIE>;
}

const routes: RouteIE[] = [
  {
    path: "/",
    exact: true,
    title: "대시보드",
    Component: Dashboard,
  },
  {
    path: "/",
    exact: true,
    title: "대시보드",
    Component: Dashboard,
  },
  {
    path: "/",
    exact: true,
    title: "대시보드",
    Component: Dashboard,
  },
  {
    path: "/",
    exact: true,
    title: "대시보드",
    Component: Dashboard,
  },
  {
    path: "/",
    exact: true,
    title: "대시보드",
    Component: Dashboard,
  },
  {
    path: "/",
    exact: true,
    title: "대시보드",
    Component: Dashboard,
  },
  {
    path: "/",
    exact: true,
    title: "대시보드",
    Component: Dashboard,
  },
  {
    path: "/",
    exact: true,
    title: "대시보드",
    Component: Dashboard,
  },
];

export default routes;
