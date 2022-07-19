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
  isLoading: boolean;
}

const initialState: DataState = {
  data: {},
  isLoading: false,
};

export const weatherDataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        console.log(action, "redux");
        state.data = action.payload?.data;
        console.log(state.data, "datay arjeq");
        console.log(typeof state.data, "datayi type");
        state.isLoading = false;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export default weatherDataSlice.reducer;
