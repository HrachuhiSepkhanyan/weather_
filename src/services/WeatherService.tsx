import axios, { AxiosResponse } from "axios";
import { API_URL, API_KEY } from "../API/API";
import { Weather } from "../redux/types";

const basic = axios.create({
  baseURL: API_URL,
});

export class WeatherService {
  static getWeatherByCity(city: any): Promise<AxiosResponse<Weather>> {
    return basic.get(`forecast?q=${city}&appid=${API_KEY}`);
  }
  static getWeatherByCoords(location: any) {
    return basic.get(
      `forecast?lat=${location.lat}&lon=${location.lng}&appid=${API_KEY}`
    );
  }
}
