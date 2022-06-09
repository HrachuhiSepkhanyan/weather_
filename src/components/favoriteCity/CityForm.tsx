import React, { useEffect, useState } from "react";
import cities from "cities.json";
import useGeoLocation from "../../useGeoLocation";
import { API_KEY } from "../../API/API";
import { Style } from "./CityForm.styles";
import { CityList } from "./CitiesList";
import { ICity } from "../../interfaces";
// import del from "../../images/delete.svg";

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

  const add = (name: string) => {
    const newCity: ICity = {
      name: name,
    };

    setCity((state: any) => [...state, newCity]);
  };
  // let storage: IStorage[] = localStorage.getItem("city");
  // console.log(storage);

  let storage = localStorage.getItem("city");
  const addCity = (event: React.MouseEvent) => {
    event.preventDefault();

    if (objectCity) {
      add(inputValue);
      localStorage.setItem("city", JSON.stringify(city));
      setInputValue("");
      return storage;
    }
    alert("City is not defined");
  };
  const objectCity: any = (cities as ICity[]).find((item: ICity) => {
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
      {/* <Style.AllFavoriteCity> */}
      {/* {storage.map((i: any) => {
          return (
            <Style.CardCity key={Math.random()}>
              {i.name}
              <button>
                <img src={del} alt="delete"></img>
              </button>
            </Style.CardCity>
          );
        })}
      </Style.AllFavoriteCity> */}

      <CityList cities={city} />
    </Style.Container>
  );
};

export default CityForm;
