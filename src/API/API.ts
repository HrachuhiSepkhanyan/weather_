import axios from "axios";
import { ILocation } from "../interfaces";
export const API_ICON_ULR = `http://openweathermap.org/img/wn/`;

const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "405110063480fa01dfcf5b3aad2080e2";

const api = axios.create({
  baseURL: API_URL,
});

export const WeatherApi = {
  getWeatherByCity(city: string) {
    return api.get(`forecast?q=${city}&appid=${API_KEY}`);
  },
  getWeatherByLocation(coords: ILocation) {
    return api.get(
      `forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
    );
  },
};
