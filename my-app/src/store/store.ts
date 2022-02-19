import { configureStore } from "@reduxjs/toolkit";
import toggleFilterReducer from "./reducers/toggleFilterReducer";
import toggleFavouriteModalReducer from "./reducers/toggleFavouriteModalReducer";

const reducers = {
  toggleFilterReducer,
  toggleFavouriteModalReducer,
};

const store = configureStore({ reducer: reducers });

export default store;
