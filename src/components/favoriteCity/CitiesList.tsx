import React from "react";
import { ICity } from "../../interfaces";
import del from "../../images/delete.svg";
import { NavLink } from "react-router-dom";

import { CardCity, AllFavoriteCity } from "./CitiesList.styled";

type CityListProps = {
  cities: ICity[];
};

export const CityList: React.FC<CityListProps> = ({ cities }) => {
  return (
    <NavLink
      key={Math.random()}
      to="/weather"
      style={{ textDecoration: "none", color: "black" }}
    >
      <AllFavoriteCity>
        {cities.map((i: any) => {
          return (
            <CardCity key={Math.random()}>
              {i.name}
              <button>
                <img src={del} alt="delete"></img>
              </button>
            </CardCity>
          );
        })}
      </AllFavoriteCity>
    </NavLink>
  );
};
