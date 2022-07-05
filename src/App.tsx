import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.styled.tsx";
import Header from "./components/header/Header";
import { UnitProvider } from "./context/unit";
import CityForm from "../src/components/favoriteCity/CityForm";
import Home from "./components/pages/home/HomePage";
import Weather from "./components/weather/Weather";
import { AppContainer } from "./App.styled";
export const UnitContext = React.createContext(undefined);

const App: React.FunctionComponent = () => {
  return (
    <UnitProvider>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:weather/:city/:date" element={<Weather />} />
          <Route path="/favoritecity" element={<CityForm />} />
        </Routes>
      </AppContainer>
    </UnitProvider>
  );
};

export default App;
