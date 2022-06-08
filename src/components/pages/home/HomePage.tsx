import React from "react";
import { Style } from "./City.style";
import Weather from "../../weather/Weather";

const Home: React.FunctionComponent = () => {
  return (
    <Style.Content>
      <Weather />
    </Style.Content>
  );
};

export default Home;
