import { currentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherService } from './../../services/WeatherService';
import { AppDispatch } from './../store';

export const fetchCurrentWeather =  
 (payload:string) =>  async(dispatch:AppDispatch) => {
    dispatch(action:currentWeatherSlice.actions.fetchCurrentWeather());
const res = await WeatherService.getWeatherByCity(city:payload)
};

export default fetchCurrentWeather;
