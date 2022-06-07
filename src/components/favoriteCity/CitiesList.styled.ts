import styled from "styled-components";

const CardCity = styled.div`
  width: 32%;
  display: flex;
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
  :hover {
    background-color: #ccc;

    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  & > button {
    background-color: transparent;
    border: none;
  }

  & > button > img {
    width: 25px;
    cursor: pointer;
    transition: transform 0.2s linear;
  }
`;
const AllFavoriteCity = styled.div`
  display: flex;
`;
export const Style = {
  CardCity,
  AllFavoriteCity,
};
