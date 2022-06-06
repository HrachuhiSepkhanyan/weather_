import React, { useState, useEffect } from "react";
import useGeoLocation from "../../../useGeoLocation";
import { Style } from "./City.style";
import Weather from "../../weather/Weather";
import { API_URL, API_KEY } from "../../../API/forecastAPI";
import Footer from "../../footer/Footer";

const t = new Date();
const dd = String(t.getDate()).padStart(2, "0");
const mm = String(t.getMonth() + 1).padStart(2, "0");
const yyyy = t.getFullYear();
const today = String(yyyy + "-" + mm + "-" + dd);

const Home: React.FunctionComponent = () => {
  const location = useGeoLocation();
  const [data, setData] = useState<any>();
  const lat = JSON.stringify(location?.coordinates?.lat);
  const lon = JSON.stringify(location?.coordinates?.lon);

  useEffect(() => {
    if (lat && lon) {
      fetch(`${API_URL}${lat}&lon=${lon}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((results) => {
          setData(results);
        });
    }
  }, [lat, lon]);

  return (
    <Style.Content>
      <Weather data={data} day={today} />
      <Footer data={data} />
    </Style.Content>
  );
};

export default Home;
