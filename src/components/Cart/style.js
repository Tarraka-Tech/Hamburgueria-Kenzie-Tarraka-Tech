import styled from "styled-components";

export const BoxCart = styled.div`
  @media (min-width: 987px) {
    margin-top: 20px;
    margin-right: 30px;
  }

  display: flex;
  flex-direction: column;

  background-color: #f5f5f5;

  width: 350px;
  height: auto;

  margin-left: 12px;
  margin-bottom: 20px;
  margin-right: 0px;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    border: none;
    background-color: transparent;

    width: 51px;
    height: 51px;
    margin-top: 20px;

    color: #bdbdbd;
    cursor: pointer;

    &:hover {
      color: #828282;
      text-decoration: underline;
    }
  }

  img {
    width: 70px;
    height: 70px;

    padding: 10px;

    background-color: #e0e0e0;

    margin-top: 25px;
  }

  section {
    h3 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      color: #333333;

      max-width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      width: 150px;
      margin-top: 25px;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      color: #828282;
    }
  }
`;

export const TitleCard = styled.h3`
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;
  color: #f5f5f5;

  width: 310px;
  height: 25px;

  margin: 0;

  padding: 20px;
`;

export const TotalCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-top: 1px solid #e0e0e0;
  margin-top: 9px;

  button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;

    background: #e0e0e0;
    color: #828282;

    width: 340px;
    height: 50px;

    border: 2px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
      background-color: #828281;
      color: white;
    }
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #333333;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    text-align: center;

    color: #828282;
  }
`;
