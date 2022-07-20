import React from "react";
import { Style } from "./Home.style";
import Weather from "../../weather/Weather";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Home: React.FunctionComponent = () => {
  const showLoading = useSelector(
    (state: RootState) => state.weatherData.showLoading
  );
  console.log(showLoading);
  return (
    <Style.Content>
      <Weather />
    </Style.Content>
  );
};

export default Home;
