import React from "react";
import "./App.styled.tsx";
import Header from "./components/header/Header";
import { UnitProvider } from "./context/unit";
import { AppContainer } from "../src/App.styled";
import Routing from "./Routing";
export const UnitContext = React.createContext(undefined);

const App: React.FunctionComponent = () => {
  return (
    <UnitProvider>
      <AppContainer>
        <Header />
        <Routing />
      </AppContainer>
    </UnitProvider>
  );
};

export default App;
