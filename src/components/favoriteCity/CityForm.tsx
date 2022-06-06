import React, { useEffect, useState } from "react";
import cities from "cities.json";
import { IItemProps } from "../../interfaces";
import useGeoLocation from "../../useGeoLocation";
import { API_KEY } from "../../API/forecastAPI";
import { Container, CityFom, Input, Form, Add } from "./CityForm.styles";
import { CityList } from "./CitiesList";
import { ICity } from "../../interfaces";

const API_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

const CityForm: React.FunctionComponent<any> = () => {
  const currentCity = useGeoLocation();
  const [city, setCity] = useState<ICity[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<any>();

  const latCurrentCity = JSON.stringify(currentCity?.coordinates?.lat);
  const lonCurrentCity = JSON.stringify(currentCity?.coordinates?.lon);
  console.log(data);
  console.log(latCurrentCity);
  console.log(lonCurrentCity);

  let storage = localStorage.getItem("city");
  const add = (name: string) => {
    const newCity: ICity = {
      id: Math.random(),
      name: name,
    };

    setCity((state: any) => [...state, newCity]);
  };
  const addCity = (event: React.MouseEvent) => {
    event.preventDefault();
    localStorage.setItem("city", JSON.stringify(city));

    if (objectCity) {
      add(inputValue);
      setInputValue("");
      return storage;
    }
    alert("City is not defined");
    window.onerror = function () {
      alert("City is not defined");
    };
  };
  const objectCity: any = cities.find(function (item: IItemProps) {
    return item.name === inputValue;
  });
  const name = () => {
    if (objectCity) {
      return objectCity.name;
    }
  };
  const favoriteCityName = name();
  console.log(favoriteCityName);

  useEffect(() => {
    fetch(`${API_URL}${favoriteCityName}&appid=${API_KEY}`)
      .then((stream) => stream.json())
      .then((results) => setData(results));
  }, [favoriteCityName]);

  return (
    <Container>
      <CityFom>
        <Form>
          <Input
            value={inputValue}
            type="text"
            placeholder="Add favorite city"
            id="name"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Add onClick={(e) => addCity(e)}>Add City +</Add>
        </Form>
      </CityFom>
      <CityList cities={city} />
    </Container>
  );
};

export default CityForm;
