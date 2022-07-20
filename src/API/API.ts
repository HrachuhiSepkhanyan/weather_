import axios from "axios";
import { ILocation } from "../interfaces";
export const API_ICON_ULR = `http://openweathermap.org/img/wn/`;

const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "ff472b4a8f4582837f1eb31fa8d7d09e";

const api = axios.create({
  baseURL: API_URL,
});

export const WeatherApi = {
  getWeatherByCity(city: String) {
    return api.get(`forecast?q=${city}&appid=${API_KEY}`);
  },
  getWeatherByLocation(coords: ILocation) {
    return api.get(
      `forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
    );
  },
};
