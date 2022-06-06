import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HeaderContainer } from "./header.styled";

const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/weather">Home</NavLink>
        <NavLink to="/favoritecity">Favorite City</NavLink>
      </div>

      <button>
        <input type="radio"></input>
        <label>°C</label>
        <input type="radio"></input>
        <label>°F</label>
      </button>
      <Outlet />
    </HeaderContainer>
  );
};
export default Header;
