import { createStore } from "redux";
import reducer from "../reducers/rootreducers";

const store = createStore(reducer);

export default store;
