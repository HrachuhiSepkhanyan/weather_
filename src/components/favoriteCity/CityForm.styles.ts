import styled from "styled-components";

const Container = styled.div`
  background-color: none;
`;
const Input = styled.input`
  text-transform: capitalize;
  border: none;
  border-bottom: 1px solid #000;
  margin-right: 5px;
  outline: none;
  padding: 0 10px;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;
const Add = styled.button`
  border: none;
  padding: 10px;
  background-color: #f4a460;
  cursor: pointer;
  transition: background-color 0.2s linear;
  color: #fff;
  outline: none;
`;

const CityFom = styled.div`
  padding: 20px;
`;
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
  & > img {
    width: 25px;
    cursor: pointer;
    transition: transform 0.2s linear;
  }
`;
const AllFavoriteCity = styled.div`
  display: flex;
`;

export const Style = {
  AllFavoriteCity,
  CardCity,
  CityFom,
  Add,
  Form,
  Input,
  Container,
};
