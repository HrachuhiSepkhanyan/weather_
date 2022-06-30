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
      info: string;
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
    city: any | undefined;
    coords?: ILocation | undefined;
  }) => {
    if (coords) {
      const result = await WeatherApi.getWeatherByLocation(coords);
      return result;
      // .then((response: any) => {
      //   return response;
      // })
      // .then((result: any) => {
      //   return result;
      // });
    } else if (city) {
      const result = await WeatherApi.getWeatherByCity(city);
      return result;
      // .then((response: any) => {
      //   return response;
      // })
      // .then((result: any) => {
      //   return result;
      // });
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
        state.isLoading = false;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export default weatherDataSlice.reducer;
