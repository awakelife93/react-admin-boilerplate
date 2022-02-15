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
import { UnknownObject } from "../common/type";
import * as action from "./action";
import reducers from "./reducer";
import { ReduxStoreType } from "./type";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const mapStateToProps = (state: ReduxStoreType) => state;
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(action, dispatch);

export const connectWrapper = (component: React.FC<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export const configureStore = (initialState: UnknownObject = {}) => {
  const store = createStoreWithMiddleware(
    /**
     * reduxStore라는 이름으로 전역 Store들을 묶어준다.
     */
    combineReducers({ reduxStore: reducers }),
    initialState
  );
  return store;
};
