import {ADD_TAXI, CENTER, POSITION, SELECT_TAXI, SET_INPUT_VALUE} from "./actionTypes";
import {
  IGetTaxiAction,
  ISelectTaxiAction,
  ISetCenterAction,
  ISetInputValueAction,
  ISetPositionAction,
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
