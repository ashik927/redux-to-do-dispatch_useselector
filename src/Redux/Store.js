import { createStore } from "redux";
import { reducers } from "./Reducers";

export let store = createStore(reducers);