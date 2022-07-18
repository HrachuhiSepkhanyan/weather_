import { configureStore, combineReducers } from "@reduxjs/toolkit";
import weatherDataReducer from "./slices/weatherDataSlices";

export const rootReducer = combineReducers({
  weatherData: weatherDataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
