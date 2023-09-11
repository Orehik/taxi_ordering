import {ADD_TAXI, CENTER, POSITION, SELECT_TAXI, SET_INPUT_VALUE} from "../redux/actions/actionTypes";

export type TCoords = [number, number];

export interface ISetInputValueAction {
  type: typeof SET_INPUT_VALUE,
  payload: string,
}

export interface ISetPositionAction {
  type: typeof POSITION,
  payload: TCoords | null,
}

export interface ISetCenterAction {
  type: typeof CENTER,
  payload: TCoords
}

export interface IGetTaxiAction {
  type: typeof ADD_TAXI,
  payload: ITaxiItem[],
}

export interface ISelectTaxiAction {
  type: typeof SELECT_TAXI,
  payload: number | null,
}

export type TActions = ISetPositionAction | ISetCenterAction | IGetTaxiAction | ISetInputValueAction | ISelectTaxiAction

export interface ITaxiItem {
  crew_id: number,
  car_mark: string,
  car_model: string,
  car_color: string,
  car_number: string,
  driver_name: string,
  driver_phone: string,
  lat: number,
  lon: number,
  distance: number
}

