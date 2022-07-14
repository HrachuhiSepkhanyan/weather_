import React from "react";
import { ICity } from "../../interfaces";
import del from "../../images/delete.svg";
import { NavLink } from "react-router-dom";
import { Style } from "./CitiesList.styled";

type CityListProps = {
  cities: ICity[];
};
const t = new Date();
const dd = String(t.getDate()).padStart(2, "0");
const mm = String(t.getMonth() + 1).padStart(2, "0");
const yyyy = t.getFullYear();
const today = String(yyyy + "-" + mm + "-" + dd);

export const CityList: React.FC<CityListProps> = ({ cities }) => {
  return (
    <Style.AllFavoriteCity>
      {cities.map((city) => (
        <Style.CardCity key={Math.random()}>
          <NavLink
            to={`/weather/${city.name}/${today}`}
            key={Math.random()}
            style={{ textDecoration: "none", color: "black" }}
          >
            {city.name}
          </NavLink>
          <button>
            <img src={del} alt="delete"></img>
          </button>
        </Style.CardCity>
      ))}
    </Style.AllFavoriteCity>
  );
};
