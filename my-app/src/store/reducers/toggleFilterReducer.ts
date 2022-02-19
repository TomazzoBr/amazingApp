import { AnyAction } from "@reduxjs/toolkit";

interface toggleFilterInterface {
  value: string;
}

const initialState: toggleFilterInterface = {
  value: "none",
};

export default function toggleFilterReducer(
  state = initialState,
  action: AnyAction
) {
  if (action.type === "products/toggleFilter") {
    return {
      ...state,
      value: action.value,
    };
  }
  return state;
}
