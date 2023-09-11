import {
  ADD_TAXI,
  CENTER,
  POSITION,
  SELECT_TAXI,
  SET_ADDRESS_ERROR,
  SET_INPUT_VALUE,
  SET_TAXI_ERROR
} from "./actionTypes";
import {
  IGetTaxiAction,
  ISelectTaxiAction, ISetAddressErrorAction,
  ISetCenterAction,
  ISetInputValueAction,
  ISetPositionAction, ISetTaxiErrorAction,
  ITaxiItem,
  TCoords
} from "../../types/type"

export const setInputValueAC = (inputValue: string): ISetInputValueAction => {
  return {
    type: SET_INPUT_VALUE,
    payload: inputValue,
  };
};

export const setPositionAC = (coords: TCoords | null): ISetPositionAction => {
  return {
    type: POSITION,
    payload: coords
  };
};

export const setCenterAC = (coords: TCoords): ISetCenterAction => {
  return {
    type: CENTER,
    payload: coords,
  };
};

export const setTaxiAC = (arrayItem: ITaxiItem[]): IGetTaxiAction => {
  return {
    type: ADD_TAXI,
    payload: arrayItem,
  }
}

export const selectTaxiAC = (crew_id: number | null): ISelectTaxiAction => {
  return {
    type: SELECT_TAXI,
    payload: crew_id
  }
}

export const setTaxiErrorAC = (value: boolean): ISetTaxiErrorAction => {
  return {
    type: SET_TAXI_ERROR,
    payload: value
  }
}

export const setAddressErrorAC = (value: boolean): ISetAddressErrorAction => {
  return {
    type: SET_ADDRESS_ERROR,
    payload: value
  }
}
