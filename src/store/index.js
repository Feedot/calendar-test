import { createStore, compose } from "redux";

import middleware from "./middleware/index";
import reducers from "./reducers/index";

const initialState = { matrix: [] };
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(middleware, ...enhancers);

const store = createStore(reducers, initialState, composedEnhancers);

export default store;
