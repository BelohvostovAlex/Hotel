import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { roomsReducer } from "./reducers/roomsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({roomsReducer})
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))