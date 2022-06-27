import { Weather } from "../types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { WeatherApi } from "../../API/API";
import { ICoords } from "../../interfaces";

const initialState = {
  weather: {},
  isLoading: false,
};

export interface IFetchData {
  city?: {
    name: string;
  };
  coords?: ICoords;
  list?: {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: String;
    }[];
  }[];
}

export const fetchData = createAsyncThunk(
  "weather/data",
  async ({ city, coords }: { city: string | null; coords?: ICoords }) => {
    if (city) {
      return WeatherApi.getWeatherByCity(city);
    } else if (coords) {
      return WeatherApi.getWeatherByCoords(coords);
    }
  }
);

export const WeatherDataSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    fetchWeather(state) {
      state.isLoading = true;
    },
    fetchWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.weather = action.payload.data;
      state.isLoading = false;
    },
    fetchWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
    },
  },
});

export default WeatherDataSlice.reducer;
