import { TRootState } from "../index";

export const selectTaxiError = (state: TRootState): boolean => {
  return state.errorState.taxiError
}

export const selectAddressError = (state: TRootState): boolean => {
  return state.errorState.addressError
}
