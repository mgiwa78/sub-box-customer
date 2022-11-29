import styled from "styled-components/macro";

export const CategoryMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
  width: 100vw;
  background-color: #f4f3f1;
  .links {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 40px;
    height: 90px;
    align-items: center;
    li {
      font-weight: 500;
      font-size: 18px;
      cursor: pointer;
      width: max-content;
    }
  }
`;
