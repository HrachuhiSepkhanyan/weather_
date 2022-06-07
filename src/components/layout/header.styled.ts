import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: indigo;
  position: relative;
  color: white;
  background-color: indigo;
  & > div > a {
    color: white;
    text-decoration: none;
    margin: 10px;
  }
  & > button {
    position: absolute;
    right: 30px;
    background-color: #fff;
    padding: 5px;
    border-radius: 50px;
  }
  & > button > input {
    box-sizing: border-box;
    padding: 0;
  }
`;
export const Style = {
  HeaderContainer,
};
