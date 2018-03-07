import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ConfigurateState from "./configurateState";

export default applyMiddleware(ConfigurateState, thunk);
