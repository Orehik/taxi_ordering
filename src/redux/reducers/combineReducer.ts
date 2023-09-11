import { combineReducers } from "redux";
import { mapReducer } from "./mapReducer";
import { taxiReducer } from "./taxiReducer";
import { errorReducer } from "./errorsReducer";

const rootReducer = () => combineReducers({
  mapState: mapReducer,
  taxiState: taxiReducer,
  errorState: errorReducer,
})

export default rootReducer
