import { createStore } from "redux";
import rootReducer from "./reducers/combineReducer";

const store = createStore(rootReducer());

export type TRootState = ReturnType<typeof store.getState>

export default store;
