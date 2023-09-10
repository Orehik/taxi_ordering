import {ITaxiItem, TActions} from "../../types/type";
import { ADD_TAXI } from "../actions/actionTypes";

export interface ITaxiState {
  taxiList: ITaxiItem[],
}

const initialTaxiState: ITaxiState = {
  taxiList: [],
};

export const taxiReducer = (state = initialTaxiState, action: TActions): ITaxiState  => {
  switch (action.type) {
    case ADD_TAXI :
      return { ...state, taxiList: action.payload }
    default :
      return state
  }
}
