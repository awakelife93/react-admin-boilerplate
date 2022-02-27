import { UnknownObject } from "@/common/type";
import React from "react";
import { connect } from "react-redux";
import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  createStore,
  Dispatch,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { ReduxStoreType } from "../type";
import * as action from "./action";
import reducers from "./reducer";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const mapStateToProps = (state: ReduxStoreType) => state;
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(action, dispatch);

const store = (initialState: UnknownObject = {}) => {
  const _store = createStoreWithMiddleware(
    combineReducers({ reduxStore: reducers }),
    initialState
  );

  return _store;
};

export const connectWrapper = (component: React.FC<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export default store;
