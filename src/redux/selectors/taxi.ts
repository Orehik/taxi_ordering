import { ITaxiItem } from "../../types/type";
import { TRootState } from "../index";

export const selectTaxiList = (state: TRootState): ITaxiItem[] => {
  return state.taxiState.taxiList
}

export const getSelectedTaxi = (state: TRootState): number | null => {
  return state.taxiState.selectedTaxi
}
