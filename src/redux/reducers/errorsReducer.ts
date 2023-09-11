import { TActions } from "../../types/type";
import { SET_ADDRESS_ERROR, SET_TAXI_ERROR } from "../actions/actionTypes";

export interface IErrorState {
  taxiError: boolean,
  addressError: boolean,
}

const initialTaxiState: IErrorState = {
  taxiError: false,
  addressError: false,
};

export const errorReducer = (state = initialTaxiState, action: TActions): IErrorState => {
  switch (action.type) {
    case SET_TAXI_ERROR :
      return { ...state, taxiError: action.payload }
    case SET_ADDRESS_ERROR :
      return { ...state, addressError: action.payload }
    default :
      return state
  }
}
