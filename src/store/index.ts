import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import alertReducer from "./reducers/alertReducer";
import weatherReducer from "./reducers/weatherReducer";

const rootReducers = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducers>;

export default store;
