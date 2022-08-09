import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/HomePage";
import Weather from "./components/weather/Weather";
import CityForm from "./components/favoriteCity/CityForm";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:weather/:city/:date" element={<Weather />} />
      <Route path="/favoritecity" element={<CityForm />} />
    </Routes>
  );
}

export default Routing;
