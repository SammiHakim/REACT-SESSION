import { createStore } from "redux";
import { rootRedcuer } from "./reactReduxCounter";
export const store = createStore(rootRedcuer);
