import React from "react";
import { Style } from "../pages/home/City.style";

const Weather: React.FunctionComponent<any> = ({ data, day }) => {
  const currentCityName = data?.city?.name;
  console.log(currentCityName);
  return (
    <Style.Content>
      <Style.CurrentCard>
        <h3>{currentCityName}</h3>
        <h1>
          {Math.ceil(((data?.list?.[0]?.main?.temp - 273) * 9) / 5 + 32) + "°F"}
        </h1>
        <Style.CardDayIcon></Style.CardDayIcon>
        <h4>{data?.list?.[0]?.weather?.[0]?.main}</h4>
      </Style.CurrentCard>
      <Style.WeatherHour>
        {data?.list
          ?.filter((item: any) => {
            return item.dt_txt.includes(day);
          })
          .map((item: any) => {
            return (
              <Style.WeatherHourItem key={Math.random()}>
                <div>{item.dt_txt.slice(10, 16)}</div>
                <div>
                  {Math.ceil((item.main.temp - 273.15) * 9) / 5 + 32 + "°F"}
                </div>
                <div>
                  <img alt="" />
                </div>
              </Style.WeatherHourItem>
            );
          })}
      </Style.WeatherHour>
    </Style.Content>
  );
};
export default Weather;
