import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherApi } from "../../API/API";
import { ILocation } from "../../interfaces";

export interface IGetWeather {
  city?: {
    name: string;
  };
  coords?: ILocation;
  list?: {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      icon: string;
      main: String;
    }[];
  }[];
}

export const getWeather = createAsyncThunk(
  "data/fetch",
  async ({
    city,
    coords,
  }: {
    city: String | undefined;
    coords?: ILocation | undefined;
  }) => {
    if (coords) {
      const result = await WeatherApi.getWeatherByLocation(coords);
      return result;
    } else if (city) {
      const result = await WeatherApi.getWeatherByCity(city);
      return result;
    }
  }
);
export interface DataState {
  data: IGetWeather;
  showLoading: boolean;
}

const initialState: DataState = {
  data: {},
  showLoading: true,
};

export const weatherDataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.showLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.showLoading = false;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.showLoading = false;
      });
  },
});
export default weatherDataSlice.reducer;
