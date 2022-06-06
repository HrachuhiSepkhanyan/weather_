import useGeoLocation from "../useGeoLocation";

export const API_URL = "https://api.openweathermap.org/data/2.5/forecast?lat=";
export const API_KEY = "cac27a5feb2e69fa2bbb874bae11f064";
export const API_ICON = "http://openweathermap.org/img/wn/10d@2x.png";

export const GetWeather = () => {
  const location = useGeoLocation();
};
