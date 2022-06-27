import { configureStore, combineReducers } from "@reduxjs/toolkit";
import weatherDataReducer from "./slices/weatherDataSlices";
import cityReducer from "./slices/citySlices";

export const rootReducer = combineReducers({
  city: cityReducer,
  weatherData: weatherDataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
