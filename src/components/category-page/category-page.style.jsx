import styled from "styled-components/macro";
export const AddToCart = styled.img`
  width: 24px;
  height: 24px;
`;
export const LikeIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CategoryPageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  .container {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80vw;
  }
  .category {
    margin-bottom: 30px;
    padding-bottom: 60px;
    border-bottom: 1px solid #cfcfcf;
  }
  .category-page-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    .category-page-dir {
      font-size: 12px;
    }
    .category-page-actions {
      width: 70px;
      display: flex;
      justify-content: space-around;
    }
  }
  .category-page-title {
    width: 100%;

    height: 143px;
    background-color: #f4f3f1;

    margin-top: 10px;
    display: flex;
    padding: 0 30px;
    margin-bottom: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .title {
      font-size: 24px;
      font-weight: 500;
    }
    .short-dec {
      margin-top: 3px;
      font-size: 14px;
      color: #5f5f5f;
    }
  }
  .display {
    display: flex;
    width: 100%;
    .left {
      width: 300px;

      height: 500px;
      text-align: left;
      ul {
        padding: 40px;
        li {
          font-size: 16px;
          text-transform: uppercase;
          list-style: none;
          font-weight: 600;
          margin-bottom: 7px;
        }
      }
    }
    .right {
      width: 1200px;

      .item-row {
        overflow: hidden;
        flex-wrap: wrap;
        width: 100%;
        display: flex;
        gap: 30px;
        align-items: center;
        .err_messg {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
