import init from "./features";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

const config = init();

export const store = createStore(
    combineReducers(config.reducers),
    applyMiddleware(thunkMiddleware)
)