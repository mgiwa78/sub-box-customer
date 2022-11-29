import styled, { css } from "styled-components/macro";

export const SubscriptionDrpContainer = styled.div`
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
  /* .unit-option {
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
        }
        .add-to-fav {
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
  } */
`;
