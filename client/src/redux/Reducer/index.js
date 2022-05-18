import { combineReducers } from "redux";
import ArtReducer from "./ArtReducer";
import storageReducer from "./CartReducer";

const rootReducer = combineReducers({
  ArtReducer,
  storageReducer,
});

export default rootReducer;
