import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Style } from "./header.styled";
import Temp from "./Temp";

const Header: React.FunctionComponent = () => {
  return (
    <Style.HeaderContainer>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favoritecity">Favorite City</NavLink>
      </div>
      <Temp /> <Outlet />
    </Style.HeaderContainer>
  );
};
export default Header;
