import { SET_INPUT_VALUE, POSITION, CENTER } from "../actions/actionTypes";
import { TActions, TCoords } from "../../types/type";

export interface IMapState {
  inputValue: string,
  coordinates: {
    center: TCoords,
    position: null | TCoords,
  },
}

const initialState: IMapState = {
  inputValue: '',
  coordinates: {
    center: [56.845131, 53.212101],
    position: null,
  }
};

export const mapReducer = (state = initialState, action: TActions): IMapState => {
  switch (action.type) {
    case POSITION :
      return { ...state, coordinates: {
        ...state.coordinates, position: action.payload} }
    case CENTER :
      return { ...state, coordinates: {
          ...state.coordinates, center: action.payload} }
    case SET_INPUT_VALUE :
      return { ...state, inputValue: action.payload }
    default :
      return state
  }
}
