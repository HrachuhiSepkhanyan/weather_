import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Style } from "./header.styled";

const Header: React.FunctionComponent = () => {
  return (
    <Style.HeaderContainer>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favoritecity">Favorite City</NavLink>
      </div>

      <button>
        <input type="radio"></input>
        <label>°C</label>
        <input type="radio"></input>
        <label>°F</label>
      </button>
      <Outlet />
    </Style.HeaderContainer>
  );
};
export default Header;
