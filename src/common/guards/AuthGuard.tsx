import { ReactElement } from "react";
import SignInPage from "../../pages/Sign";
import useAuth from "../hooks/useAuth";
import { ComponentIE } from "../interface";

interface AuthProviderIE extends ComponentIE {
  children: ReactElement;
}
const AuthGuard: React.FC<AuthProviderIE> = (props: AuthProviderIE): ReactElement => {
  useAuth();
  const { children, reduxStore: {
    userStore: {
      user: {
        isLogin
      }
    }
  }} = props;

  if (!isLogin) {
    return <SignInPage {...props} />;
  }
  
  return children;
};

export default AuthGuard;