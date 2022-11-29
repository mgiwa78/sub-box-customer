import styled from "styled-components/macro";

export const SearchIcon = styled.img``;
export const ItemRowContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-items: flex-start;

  .title {
    font-weight: 500;
    font-size: 18px;
  }
  .item-row {
    overflow: hidden;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
  }
`;
