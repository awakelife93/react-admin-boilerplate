import { ElementType, lazy, Suspense } from "react";
import Layout from "../common/layouts";

// * 추후 확장하기 위해 따로 빼둠.
export const LayoutComponent = (): React.ReactElement => {
  return <Layout />;
};

export const generateComponent = (Component: ElementType) => (props: any) => (
  <Suspense fallback={false}>
    <Component {...props} />
  </Suspense>
);

export const Dashboard = generateComponent(lazy(() => import("../pages/Dashboard")));
export const ContentsList = generateComponent(lazy(() => import("../pages/Contents")));
export const ContentsDetail= generateComponent(lazy(() => import("../pages/Contents/Detail")));
export const DesignList = generateComponent(lazy(() => import("../pages/Design")));
export const DesignDetail= generateComponent(lazy(() => import("../pages/Design/Detail")));
export const UserList = generateComponent(lazy(() => import("../pages/User")));
export const UserDetail= generateComponent(lazy(() => import("../pages/User/Detail")));
export const SignIn = generateComponent(lazy(() => import("../pages/Sign")));
