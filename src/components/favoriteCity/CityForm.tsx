import React, { useEffect, useState } from "react";
import cities from "cities.json";
import { Style } from "./CityForm.styles";
import { CityList } from "./CitiesList";
import { ICity } from "../../interfaces";

const CityForm: React.FC = () => {
  const [city, setCity] = useState<ICity[]>(getCity());
  const [inputValue, setInputValue] = useState<string>("");

  const add = (name: string): void => {
    const newCity: ICity = {
      name: name,
    };
    setCity((state) => [...state, newCity]);
  };
  const onDel = (key: String) => {
    const remove = city.filter((elem) => {
      return elem.name !== key;
    });
    setCity(remove);
  };

  useEffect(() => {
    localStorage.setItem("City", JSON.stringify(city));
  }, [city]);

  function getCity() {
    const data = localStorage.getItem("City");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  const addCity = (event: React.MouseEvent<HTMLButtonElement>): void => {
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
  console.log(city);
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
          <Style.Add onClick={addCity}>Add City +</Style.Add>
        </Style.Form>
      </Style.CityFom>

      <CityList cities={city} onDelete={onDel} />
    </Style.Container>
  );
};

export default CityForm;
