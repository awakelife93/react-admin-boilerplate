import _ from "lodash";
import { useEffect } from "react";
import { getLocalStorageItem, i18n } from "../../core";

const useI18nChange = () => {
  useEffect(() => {
    const localStorageLng = getLocalStorageItem("lng");

    if (!_.isNull(localStorageLng) && localStorageLng !== i18n.language) {
      i18n.changeLanguage(localStorageLng);
    }
  }, []);
};

export default useI18nChange;
