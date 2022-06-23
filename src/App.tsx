import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import { UnitProvider } from "./context/unit";
import CityForm from "../src/components/favoriteCity/CityForm";
import Home from "./components/pages/home/HomePage";
import Weather from "./components/weather/Weather";
export const UnitContext = React.createContext(undefined);

const App: React.FunctionComponent = () => {
  return (
    <UnitProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:weather/:city/:date" element={<Weather />} />
          <Route path="/favoritecity" element={<CityForm />} />
        </Routes>
      </div>
    </UnitProvider>
  );
};

export default App;
