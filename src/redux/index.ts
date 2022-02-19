import reduxLibStore from "./reduxLib";
import reduxToolkitStore from "./reduxToolkit";

type ReduxSelectType = {
  reduxLib: Function;
  reduxToolkit: Function;
};
const reduxSelector: ReduxSelectType = {
  reduxLib: () => {
    return reduxLibStore();
  },
  reduxToolkit: () => {
    return reduxToolkitStore;
  },
};

export default reduxSelector;
