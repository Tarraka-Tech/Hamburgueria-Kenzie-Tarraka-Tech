import styled from "styled-components";

export const Header = styled.header`
  background: #f5f5f5;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.h1`
  font-style: "Inter", sans-serif;
  font-size: 26px;
  span {
    font-size: 14px;
    color: #e60000;
  }
  @media (min-width: 700px) {
    margin-left: 30px;
  }
`;

export const Pesquisa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border: 0.5px solid #e0e0e5;
  border-radius: 10px;
  padding: 5px;

  background: #ffffff;

  &:focus {
    border: 1px solid black;
  }

  input {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;
    gap: 115px;

    width: 200px;
    height: 40px;
    left: 16px;
    top: 65px;

    background: #ffffff;

    border: 2px solid #ffffff;
    border-radius: 8px;

    &:focus {
      border: 1px solid transparent;
      outline: 0;
      &::placeholder {
        color: transparent;
      }
    }
  }

  button {
    width: 107px;
    height: 40px;

    background: #27ae60;
    color: #ffffff;

    border: 2px solid #27ae60;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: #93d7af;
    }
  }

  @media (min-width: 700px) {
    margin-right: 40px;
  }
`;

export const Main = styled.main`
  @media (min-width: 1120px) {
    display: flex;
    flex-direction: row;
  }
`;
