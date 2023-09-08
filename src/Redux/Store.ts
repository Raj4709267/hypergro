import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { AppReducer } from "./AppReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(AppReducer, applyMiddleware(thunk));

export default store;
