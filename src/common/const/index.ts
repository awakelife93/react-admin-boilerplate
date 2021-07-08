import { getLocalStorageItem } from "../../core";
import { I18nCommandEnum } from "../../core/i18n/type";

// default 언어는 한국어
export const defaultLng = getLocalStorageItem("lng") ?? I18nCommandEnum.KO;
// default 다크모드 적용 유무
export const defaultDarkMode =
  getLocalStorageItem("darkMode") === "true" ?? false;
// default 광고 영역 적용 유무
export const defaultShowAdContainer = false;
// default 모달 템플릿을 처음부터 보여줄거냐 말거냐 유무
export const defaultShowModal = false;
// default 모달 Background Click Close 유무
export const defaultDimClose = false;
// default 모달 ESC Key Click Close 유무
export const defaultKeyClose = true;
// default Paging Count
export const defaultPagingCount = 20;
