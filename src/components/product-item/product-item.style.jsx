import styled, { css } from "styled-components/macro";

export const ProductItemContainer = styled.div`
  width: calc(25% - 162.5px);
  height: 200px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 10px;
  .product-img {
    height: 75px;
    width: 140px;
    ${({ imgPath }) => css`
      background-image: url(${imgPath});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}
  }
  .product-details {
    height: 100px;
    width: 163px;
    padding-top: 20px;
    text-align: left;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 3px;
    .name {
      font-size: 14px;
    }
    .price {
      display: flex;
      flex-direction: column;
      font-weight: 400;
      font-size: 12px;

      .price-value {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .unit {
      margin-top: 20px;
      font-size: 12px;
      padding: 5px;
      background-color: #f4f3f1;
      width: max-content;

      .unit-value {
        font-size: 12px;
      }
    }
  }
`;
