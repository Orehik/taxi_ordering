import { ITaxiItem, TActions } from "../../types/type";
import { ADD_TAXI, SELECT_TAXI } from "../actions/actionTypes";

export interface ITaxiState {
  taxiList: ITaxiItem[],
  selectedTaxi: number | null,
}

const initialTaxiState: ITaxiState = {
  taxiList: [],
  selectedTaxi: null,
};

export const taxiReducer = (state = initialTaxiState, action: TActions): ITaxiState => {
  switch (action.type) {
    case ADD_TAXI :
      return { ...state, taxiList: action.payload }
    case SELECT_TAXI :
      return { ...state, selectedTaxi: action.payload }
    default :
      return state
  }
}
