import { SET_INPUT_VALUE, POSITION, CENTER, ADD_TAXI } from "./actionTypes";
import {
  ISetInputValueAction,
  ISetPositionAction,
  ISetCenterAction,
  IGetTaxiAction,
  ITaxiItem,
  TCoords
} from "../../types/type"

export const setInputValueAC = (inputValue: string): ISetInputValueAction => {
  return {
    type: SET_INPUT_VALUE,
    payload: inputValue,
  };
};

export const setPositionAC = (coords: TCoords): ISetPositionAction => {
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
