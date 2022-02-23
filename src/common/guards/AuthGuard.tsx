import { ReactElement } from "react";
import { useSelector } from "react-redux";
import SignInPage from "../../pages/Sign";
import { ReduxStoreType } from "../../redux/type";
import { IComponent } from "../interface";

interface IAuthProvider extends IComponent {
  children: ReactElement;
}
const AuthGuard: React.FC<IAuthProvider> = (props: IAuthProvider): ReactElement => {
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