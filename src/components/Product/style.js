import styled from "styled-components";

export const Produto = styled.li`
  @media (min-width: 930px) {
    margin-bottom: 20px;
    width: 250px;
  }

  @media (min-width: 1300px) {
    width: 300px;
  }

  list-style: none;

  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  width: 300px;
  height: 346px;

  margin-right: 20px;

  &:hover {
    border: 2px solid rgba(107, 107, 107, 0.43);
  }

  h2 {
    margin: 2px 21px;
    margin-top: 5px;
    max-width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #333333;
  }

  p {
    margin-left: 21px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #828282;
  }

  h3 {
    margin-left: 21px;
    color: #27ae60;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #27ae60;
  }

  button {
    width: 107px;
    height: 35px;

    background: #27ae60;
    color: #ffffff;

    border: 2px solid #27ae60;
    border-radius: 8px;

    margin-left: 21px;
    cursor: pointer;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;

    &:hover {
      background: #93d7af;
    }
  }
`;

export const BoxImage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f5f5f5;

  width: 300px;

  img {
    width: 177px;
    height: 177px;
  }

  @media (min-width: 930px) {
    width: 250px;
  }
  @media (min-width: 1300px) {
    width: 300px;
  }
`;
