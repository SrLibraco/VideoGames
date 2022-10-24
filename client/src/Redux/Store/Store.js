import { createStore, applyMiddleware } from "redux";
import reducer from "../Reducer/Reducer.js";
import thunk from 'redux-thunk';
import { compositeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, compositeWithDevTools(applyMiddleware(thunk)));

export default store;