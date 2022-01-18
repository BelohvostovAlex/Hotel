import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { roomsReducer } from "./reducers/roomsReducer";

const rootReducer = combineReducers({roomsReducer})
export const store = createStore(rootReducer, applyMiddleware(thunk))