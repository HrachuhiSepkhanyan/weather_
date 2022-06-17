import React, { useState, useEffect } from "react";
import { Style } from "./Weather.style";
import { API_ICON_ULR } from "../../API/API";
import { useParams } from "react-router-dom";
import useGeoLocation from "../../useGeoLocation";
import { API_URL, API_KEY } from "../../API/API";
import Footer from "../footer/Footer";
import { ILocation } from "../../interfaces";
import { useSearchParams } from "react-router-dom";
const t = new Date();
const dd = String(t.getDate()).padStart(2, "0");
const mm = String(t.getMonth() + 1).padStart(2, "0");
const yyyy = t.getFullYear();
const today = String(yyyy + "-" + mm + "-" + dd);

const Weather: React.FunctionComponent<any> = () => {
  const { date } = useParams();
  const { city } = useParams();
  const location = useGeoLocation();
  const [coords, setCoords] = useState<ILocation>();
  const [data, setData] = useState<any>();

  const lat = JSON.stringify(location?.coordinates?.lat);
  const lon = JSON.stringify(location?.coordinates?.lon);

  const [searchParams] = useSearchParams();
  // const city = searchParams.get("city");
  const day = searchParams.get("day");

  useEffect(() => {
    if (!city) {
      setCoords({
        lat: lat,
        lon: lon,
      });
    }
  }, []);

  useEffect(() => {
    if (lat && lon) {
      fetch(`${API_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((results) => {
          setData(results);
        });
    }
  }, [lat, lon]);

  return (
    <Style.Content>
      <Style.CurrentCard>
        <h3>{data?.city?.name}</h3>
        <h1>{Math.ceil(data?.list?.[0]?.main?.temp - 273.15) + "°C"}</h1>
        <img
          alt=""
          src={`${API_ICON_ULR}${data?.list?.[0]?.weather?.[0]?.icon}@2x.png`}
        />
        <h4>{data?.list?.[0]?.weather?.[0]?.main}</h4>
      </Style.CurrentCard>
      <Style.WeatherHour>
        {data?.list
          ?.filter((item: any) => {
            return item.dt_txt.includes(date);
          })
          .map((item: any) => {
            return (
              <Style.WeatherHourItem key={Math.random()}>
                <div>{item.dt_txt.slice(10, 16)}</div>
                <div>
                  {Math.round(parseFloat(item.main.temp) - 273.15) + "°C"}
                </div>
                <div>
                  <img
                    alt=""
                    src={`${API_ICON_ULR}${item?.weather?.[0]?.icon}@2x.png`}
                  />
                </div>
              </Style.WeatherHourItem>
            );
          })}
      </Style.WeatherHour>
      <Footer data={data} city={city} />
    </Style.Content>
  );
};
export default Weather;
