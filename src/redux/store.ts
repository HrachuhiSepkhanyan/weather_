import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "../redux/slices/currentWeatherSlice";

export const rootReducer = combineReducers({
  currentWeatherSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
