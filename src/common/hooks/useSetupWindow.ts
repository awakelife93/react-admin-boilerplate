import { useEffect } from "react";
import { initWindowFunc } from "../../core";

const useSetupWindow = (
  initUserInfoAction: Function,
  showModalAction: Function
): void => {
  useEffect(() => {
    initWindowFunc({
      initUserInfoAction,
      showModalAction,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useSetupWindow;
