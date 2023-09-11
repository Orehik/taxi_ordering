import { TRootState } from "../index";
import { TCoords } from "../../types/type";

export const selectInputValue = (state: TRootState): string => {
  return state.mapState.inputValue
}

export const selectCenter = (state: TRootState): TCoords => {
  return state.mapState.coordinates.center
}

export const selectPosition = (state: TRootState): null | TCoords => {
  return state.mapState.coordinates.position
}
