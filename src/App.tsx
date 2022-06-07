import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/Header";

import CityForm from "../src/components/favoriteCity/CityForm";
import Home from "./components/pages/home/HomePage";
import Weather from "./components/weather/Weather";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city/:day" element={<Weather />} />
        <Route path="/favoritecity" element={<CityForm />} />
      </Routes>
    </div>
  );
};

export default App;
