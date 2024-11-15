import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: row;

  overflow-x: scroll;

  padding-inline-start: 20px;

  @media (min-width: 930px) {
    width: 900px;
    flex-wrap: wrap;

    overflow-x: hidden;
  }

  @media (min-width: 1300px) {
    width: 1150px;
    margin-left: 50px;
  }
`;
