import axios from "axios";

export const API_URL = "https://api.openweathermap.org/data/2.5/";
export const API_KEY = "cac27a5feb2e69fa2bbb874bae11f064";
export const API_ICON_ULR = `http://openweathermap.org/img/wn/`;

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const WeatherApi = {
  getWeatherByCity(city: any) {
    return api.get(`forecast?q=${city}&appid=${API_KEY}`);
  },
  getWeatherByCoords(location: any) {
    return api.get(
      `forecast?lat=${location.lat}&lon=${location.lng}&appid=${API_KEY}`
    );
  },
};
