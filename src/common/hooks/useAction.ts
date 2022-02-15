import _ from "lodash";
import { useContext } from "react";
import { ReduxActionType } from "../../redux/type";
import { ActionContext } from "../contexts/ActionContext";

const useAction = (): ReduxActionType => {
  const context = useContext(ActionContext);

  if (_.isNull(context)) {
    throw new Error("ActionContext is null");
  }

  return context;
};

export default useAction;
