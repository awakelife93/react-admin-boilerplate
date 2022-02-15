import { ReactElement } from "react";
import { useSelector } from "react-redux";
import SignInPage from "../../pages/Sign";
import { ReduxStoreType } from "../../redux/type";
import { ComponentIE } from "../interface";

interface AuthProviderIE extends ComponentIE {
  children: ReactElement;
}
const AuthGuard: React.FC<AuthProviderIE> = (props: AuthProviderIE): ReactElement => {
  const { children } = props;
  const {
    reduxStore: {
      userStore: {
        user: {
          isLogin
        }
      }
    }
  } = useSelector((state: ReduxStoreType) => state);

  if (!isLogin) {
    return <SignInPage {...props} />;
  }
  
  return children;
};

export default AuthGuard;