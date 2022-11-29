import styled, { css } from "styled-components/macro";
export const AddToCart = styled.img`
  width: 24px;
  height: 24px;
`;
export const LikeIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ItemPageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  .container {
    width: 70vw;
  }
  .item {
    margin-bottom: 30px;
    padding-bottom: 60px;
    border-bottom: 1px solid #cfcfcf;
  }
  .item-page-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .item-page-dir {
      font-size: 12px;
    }
    .item-page-actions {
      width: 70px;
      display: flex;
      justify-content: space-around;
    }
  }
  .item-page-title {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .title {
      font-size: 24px;
      font-weight: 500;
    }
    .short-dec {
      margin-top: 3px;
      font-size: 18px;
      color: #5f5f5f;
    }
  }
  .item-details-section {
    display: flex;
    height: max-content;
    text-align: left;
    align-items: center;
    justify-content: space-around;
    .item-image {
      width: 511px;
      height: 364px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      ${({ imgPath }) =>
        css`
          background-image: url(${imgPath});
        `}
    }

    .item-props {
      padding: 20px;
      border: 1px solid #cfcfcf;
      height: 100%;

      display: flex;
      gap: 15px;
      flex-direction: column;
      align-items: flex-start;
      width: 40%;
      .price {
        font-size: 20px;
        font-weight: 600;
      }
      .subscription-option,
      .subscription-unit {
        position: relative;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(100% - 24px);
        text-align: left;
        height: 40px;
        font-size: 14px;
        color: #5f5f5f;
        border-radius: 3px;
        border: 1px solid #cfcfcf;
      }
      .sub-value,
      .unit-value {
        font-size: 12px;
        font-weight: 500;
        color: #cfcfcf;
      }
      .sub-option {
        position: absolute;
        top: 39px;
        left: -1px;
        width: calc(100% - 30px);
        padding: 15px;
        z-index: 2;
        background-color: #fff;
        display: flex;
        border: 1px solid #cfcfcf;
        border-top: 1px solid #fff;
        gap: 15px;
        li {
          font-size: 14px;
          font-weight: 500;
          list-style: none;
          cursor: pointer;

          width: max-content;
          padding: 5px 10px;
          border: 1px solid #5f5f5f;
          &:hover {
            color: #fff;
            border: 1px solid #fff;

            background-color: #5f5f5f;
          }
        }
      }
      .unit-option {
        position: absolute;
        top: 39px;
        left: -1px;
        width: calc(100% - 30px);
        padding: 15px;
        z-index: 2;
        background-color: #fff;
        display: flex;
        border: 1px solid #cfcfcf;
        border-top: 1px solid #fff;
        gap: 15px;
        li {
          font-size: 14px;
          font-weight: 500;
          list-style: none;
          cursor: pointer;

          width: max-content;
          padding: 5px 10px;
          border: 1px solid #5f5f5f;
          &:hover {
            color: #fff;
            border: 1px solid #fff;

            background-color: #5f5f5f;
          }
        }
      }
      .actions {
        display: flex;
        gap: 20px;

        .buy-btn {
          padding: 8px 10px;
          background-color: #006340;
          color: #fff;
          font-weight: 500;
          font-size: 16px;
          width: max-content;
          cursor: pointer;
        }
        .add-to-fav {
          cursor: pointer;

          padding: 8px 10px;
          background-color: #fff;
          color: #000;
          font-weight: 500;
          font-size: 16px;
          width: max-content;
          border: 1px solid #000;
          &:hover {
            background-color: #000;
            color: #fff;
          }
        }
      }
    }
  }
`;
