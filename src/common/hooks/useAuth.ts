import _ from "lodash";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { findUserProfile } from "../../api/GetAPI";
import { IUserInfo } from "../../api/interface";
import { getLocalStorageItem } from "../../core";
import { ReduxStoreType } from "../../redux/type";
import useAction from "./useAction";

const useAuth = (): void => {
  const { setUserInfoAction } = useAction();
  const {
    reduxStore: { userStore },
  } = useSelector((state: ReduxStoreType) => state);

  const initUserProfile = async (): Promise<void> => {
    const profile: IUserInfo = await findUserProfile();

    if (_.isFunction(setUserInfoAction)) {
      setUserInfoAction({
        user: {
          isLogin: true,
          info: { ...profile },
        },
      });
    }
  };

  useEffect(() => {
    const token = getLocalStorageItem("token");
    // * 로그인이 된 상태라면
    if (!_.isNull(token) && !userStore.user.isLogin) {
      initUserProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAuth;
