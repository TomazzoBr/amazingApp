import { configureStore } from "@reduxjs/toolkit";
import toggleFilterReducer from "./reducers/toggleFilterReducer";

const store = configureStore({ reducer: toggleFilterReducer });

export default store;
