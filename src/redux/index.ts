import normalStore from "./normal";
import toolkitStore from "./toolkit";
import { ReduxType } from "./type";

type ReduxSelectType = {
  [key in ReduxType]: Function;
};

const reduxSelector: ReduxSelectType = {
  normal: () => {
    return normalStore();
  },
  toolkit: () => {
    return toolkitStore();
  },
};

export default reduxSelector;
