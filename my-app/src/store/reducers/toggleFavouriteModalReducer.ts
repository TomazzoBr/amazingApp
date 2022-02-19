import { AnyAction } from "@reduxjs/toolkit";

interface toggleFavouriteModalInterface {
  flag: boolean;
}

const initialState: toggleFavouriteModalInterface = {
  flag: false,
};

export default function toggleFavouriteModalReducer(
  state = initialState,
  action: AnyAction
) {
  if (action.type === "header/toggleFavouriteModal") {
    return {
      ...state,
      flag: action.flag,
    };
  }
  return state;
}
