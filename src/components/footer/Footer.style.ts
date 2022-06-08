import styled from "styled-components";

const CardDay = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
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
  
`;

const CardDayContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
`;
const CardDayIcon = styled.img`
  width: 70px !important;
  height: 70px !important;
`;

export const Style = {
  CardDay,
  CardDayContainer,
  CardDayIcon,
};
