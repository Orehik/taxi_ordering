import { combineReducers } from "redux";
import { mapReducer } from "./mapReducer";
import { taxiReducer } from "./taxiReducer";

const rootReducer = () => combineReducers({
  mapState: mapReducer,
  taxiState: taxiReducer,
})

export default rootReducer
