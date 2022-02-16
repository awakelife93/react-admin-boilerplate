import { RouteObject } from "react-router-dom";
import { I18nCommandEnum } from "../core";
import {
  ContentsDetail,
  ContentsList,
  Dashboard,
  DesignDetail,
  DesignList,
  LayoutComponent,
  SignIn,
  UserDetail,
  UserList
} from "./item";

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

export interface RouteIE extends RouteObject {
  i18nKey: I18nCommandEnum | undefined;
}
const routes: RouteIE[] = [
  {
    path: RoutePath.DASHBOARD,
    i18nKey: I18nCommandEnum.DASHBOARD,
    element: <LayoutComponent />,
    children: [
      { element: <Dashboard />, index: true }
    ]
  },
  {
    path: RoutePath.USER_LIST,
    i18nKey: I18nCommandEnum.USER_LIST,
    element: <LayoutComponent />,
    children: [
      { element: <UserList />, index: true }
    ]
  },
  {
    path: RoutePath.USER_DETAIL,
    i18nKey: undefined,
    element: <LayoutComponent />,
    children: [
      { element: <UserDetail />, index: true }
    ]
  },
  {
    path: RoutePath.CONTENTS_LIST,
    i18nKey: I18nCommandEnum.CONTENTS_LIST,
    element: <LayoutComponent />,
    children: [
      { element: <ContentsList />, index: true }
    ]
  },
  {
    path: RoutePath.CONTENTS_DETAIL,
    i18nKey: undefined,
    element: <LayoutComponent />,
    children: [
      { element: <ContentsDetail />, index: true }
    ]
  },
  {
    path: RoutePath.DESIGN_LIST,
    i18nKey: I18nCommandEnum.DESIGN_LIST,
    element: <LayoutComponent />,
    children: [
      { element: <DesignList />, index: true }
    ]
  },
  {
    path: RoutePath.DESIGN_DETAIL,
    i18nKey: undefined,
    element: <LayoutComponent />,
    children: [
      { element: <DesignDetail />, index: true }
    ]
  },
  {
    path: RoutePath.SIGN_IN,
    i18nKey: undefined,
    element: <LayoutComponent />,
    children: [
      { element: <SignIn />, index: true }
    ]
  },
];

export default routes;
