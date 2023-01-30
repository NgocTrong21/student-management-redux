import { createStore } from "redux";
import Reducer from "./reducer/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
export default Store;
