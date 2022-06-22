import styled from "styled-components";

const CurrentCard = styled.div`
  width: 65%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const WeatherHour = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;
const WeatherHourItem = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 15px;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  & > div {
    margin: 3px;
  }
  & > div > img {
    width: 70px !important;
    height: 70px !important;
  }
`;
const CardDay = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70px;
  max-height: 100px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  text-transform: uppercase;
  margin: 0 10px 10px 0;
  transition: box-shadow 0.2s linear;
  cursor: pointer;
  & > div {
    display: flex;
    flex-direction: row;
  }
  :hover {
    background-color: none;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }
  & > div :active {
    background-color: none;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }
`;
const CardDayContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
`;
const CardDayIcon = styled.img`
  width: 70px !important;
  height: 70px !important;
`;
export const Style = {
  CurrentCard,
  Content,
  WeatherHour,
  WeatherHourItem,
  CardDay,
  CardDayContainer,
  CardDayIcon,
};
