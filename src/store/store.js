import { createStore, combineReducers } from "redux";
import signOnReducer from "./reducers/signon-reducer";

const rootReducer = combineReducers({
  signon: signOnReducer
});

const store = createStore(rootReducer);
export default store;
