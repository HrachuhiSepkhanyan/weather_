import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Style } from "./Weather.style";
import { API_ICON_ULR } from "../../API/API";
import { useParams } from "react-router-dom";
import useGeoLocation from "../../useGeoLocation";
import Footer from "../footer/Footer";
import { UnitContext } from "../../context/unit";
import { getFormattedTemp } from "../../helpers/index";
import { getWeather } from "../../redux/slices/weatherDataSlices";
import { ILocation } from "../../interfaces";

const t = new Date();
const dd = String(t.getDate()).padStart(2, "0");
const mm = String(t.getMonth() + 1).padStart(2, "0");
const yyyy = t.getFullYear();
const today = String(yyyy + "-" + mm + "-" + dd);

console.log(today);

const d = new Date();
let hour = d.getHours();

if (0 < hour && hour < 3) {
  hour = 0;
} else if (3 < hour && hour < 6) {
  hour = 3;
} else if (6 < hour && hour < 9) {
  hour = 6;
} else if (9 < hour && hour < 12) {
  hour = 9;
} else if (12 < hour && hour < 15) {
  hour = 12;
} else if (15 < hour && hour < 18) {
  hour = 15;
} else if (18 < hour && hour < 21) {
  hour = 18;
} else if (hour === 21) {
  hour = 21;
}

const Weather: React.FC = () => {
  const location = useGeoLocation();
  const [coords, setCoords] = useState<ILocation>();
  const { unit } = useContext(UnitContext);
  const dispatch = useDispatch();
  const { date } = useParams();
  const { city } = useParams();
  const data = useSelector((state: Object) => state.weatherData.data);
  const lat = +JSON.stringify(location?.coordinates?.lat);
  const lon = +JSON.stringify(location?.coordinates?.lon);

  useEffect(() => {
    if (lat && lon) {
      setCoords({
        lat: lat,
        lon: lon,
      });
    }
  }, [lat, lon]);

  useEffect(() => {
    if (!city) {
      setCoords({
        lat: lat,
        lon: lon,
      });
    }
  }, [city]);

  useEffect(() => {
    dispatch(getWeather({ city, coords }));
  }, [city, coords]);
  console.log(hour);

  return (
    <Style.Content>
      <Style.CurrentCard>
        <h3>{data?.city?.name}</h3>
        <h1>{getFormattedTemp(unit, data?.list?.[0]?.main?.temp)}</h1>
        <img
          alt="icon_img"
          src={`${API_ICON_ULR}${data?.list?.[0]?.weather?.[0]?.icon}@2x.png`}
        />
        <h4>{data?.list?.[0]?.weather?.[0]?.main}</h4>
      </Style.CurrentCard>

      <Style.WeatherHour>
        {data?.list
          ?.filter((item: Object[]) => {
            return item.dt_txt.includes(date);
          })
          .map((item: Object) => {
            const temp = getFormattedTemp(unit, item.main.temp);
            return (
              <Style.WeatherHourItem key={Math.random()}>
                <div>{item.dt_txt.slice(10, 16)}</div>
                <div>{temp}</div>
                <div>
                  <img
                    alt="icon"
                    src={`${API_ICON_ULR}${item?.weather?.[0]?.icon}@2x.png`}
                  />
                </div>
              </Style.WeatherHourItem>
            );
          })}
      </Style.WeatherHour>
      <Footer data={data} city={city} hour={hour} />
    </Style.Content>
  );
};
export default Weather;
