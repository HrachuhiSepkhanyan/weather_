import React, { useEffect, useState } from "react";
import cities from "cities.json";
import useGeoLocation from "../../useGeoLocation";
import { API_KEY } from "../../API/API";
import { Style } from "./CityForm.styles";
import { CityList } from "./CitiesList";
import { ICity } from "../../interfaces";

const API_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

const CityForm: React.FunctionComponent<any> = () => {
  const currentCity = useGeoLocation();
  const [city, setCity] = useState<ICity[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<any>();

  const latCurrentCity = JSON.stringify(currentCity?.coordinates?.lat);
  const lonCurrentCity = JSON.stringify(currentCity?.coordinates?.lon);
  console.log(latCurrentCity);
  console.log(lonCurrentCity);

  const add = (name: string): void => {
    const newCity: ICity = {
      name: name,
    };
    setCity((state: any) => [...state, newCity]);
  };

  const addCity = (event: any) => {
    event.preventDefault();
    if (objectCity) {
      add(inputValue);
      setInputValue("");
      return localStorage;
    }
    alert("City is not defined");
  };

  const objectCity: any = (cities as ICity[]).find((item: ICity) => {
    return item.name === inputValue;
  });

  const name = () => {
    if (objectCity !== undefined) {
      return objectCity.name;
    }
  };
  const favoriteCityName = name();
  console.log(favoriteCityName);

  useEffect(() => {
    const handle = setTimeout(() => {
      fetch(`${API_URL}${favoriteCityName}&appid=${API_KEY}`)
        .then((stream) => stream.json())
        .then((results) => setData(results));
    }, 1000);
    return () => {
      clearTimeout(handle);
    };
  }, [favoriteCityName]);
  console.log(data);

  return (
    <Style.Container>
      <Style.CityFom>
        <Style.Form>
          <Style.Input
            value={inputValue}
            type="text"
            placeholder="Add favorite city"
            id="name"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Style.Add onClick={(e) => addCity(e)}>Add City +</Style.Add>
        </Style.Form>
      </Style.CityFom>

      <CityList cities={city} />
    </Style.Container>
  );
};

export default CityForm;
