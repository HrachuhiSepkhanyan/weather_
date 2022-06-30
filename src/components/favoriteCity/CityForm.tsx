import React, { useState } from "react";
import cities from "cities.json";
import { Style } from "./CityForm.styles";
import { CityList } from "./CitiesList";
import { ICity } from "../../interfaces";

const CityForm: React.FunctionComponent<any> = () => {
  const [city, setCity] = useState<ICity[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

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
    } else {
      alert("City is not defined");
    }
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
