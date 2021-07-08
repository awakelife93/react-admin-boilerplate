import React from "react";
import { connect } from "react-redux";
import thunkMiddleware from "redux-thunk";
import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  createStore,
} from "redux";
import * as action from "./action";
import reducers from "./reducer";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const mapStateToProps = (state: any) => state;
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(action, dispatch);

export const connectWrapper = (component: React.FC<any>) =>
  connect(mapStateToProps, mapDispatchToProps)(component);

export const configureStore = (initialState = {}) => {
  const store = createStoreWithMiddleware(
    /**
     * reduxStore라는 이름으로 전역 Store들을 묶어준다.
     */
    combineReducers({ reduxStore: reducers }),
    initialState
  );
  return store;
};
