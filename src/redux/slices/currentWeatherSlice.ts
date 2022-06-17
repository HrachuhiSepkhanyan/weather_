import { Weather } from './../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState = {
  weather: {},
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const currentWeatherSlice = createSlice(options: {
    name: 'current_weather',
    initialState,
    reducers: {
      fetchCurrentWeather(state){
        state.isLoading=true;    
        },  
      fetchCurrentWeatherSuccess(state,
        action:PayloadAction<AxiosResponse<Weather>>
        ){
           state.weather=action.payload.data;
           state.isLoading=false
        },  
    },

})