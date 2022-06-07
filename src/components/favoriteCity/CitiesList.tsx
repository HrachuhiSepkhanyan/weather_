import React from "react";
import { ICity } from "../../interfaces";
import del from "../../images/delete.svg";
import { NavLink } from "react-router-dom";

import { Style } from "./CitiesList.styled";

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
      <Style.AllFavoriteCity>
        {cities.map((i: any) => {
          return (
            <Style.CardCity key={Math.random()}>
              {i.name}
              <button>
                <img src={del} alt="delete"></img>
              </button>
            </Style.CardCity>
          );
        })}
      </Style.AllFavoriteCity>
    </NavLink>
  );
};
