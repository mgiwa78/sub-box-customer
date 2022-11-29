import styled from "styled-components/macro";

export const SearchIcon = styled.img``;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 90px;
  align-items: center;
  width: 100vw;
  position: sticky;
  border-bottom: 1px solid rgb(207, 207, 207);
  top: 0;
  .logo {
    display: flex;
    justify-content: space-around;
    height: 90px;
    align-items: center;
    font-weight: 600;
    font-size: 30px;
    height: 90px;
  }
  .search-box {
    width: 40%;
    position: relative;
    .search {
      width: 100%;
      background-color: #fafafa;
      height: 34px;
      border-radius: 3px;
      border: 1px solid black;
      padding-left: 40px;
      font-size: 14px;
    }
    .search-icon {
      position: absolute;
      left: 10px;
      width: 25px;
      height: 25px;
      top: 5px;
    }
  }

  .nav-links {
    width: max-content;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    .links {
      display: flex;
      font-size: 16px;

      justify-content: space-between;
      align-items: center;
      width: 300px;
      list-style: none;
      font-weight: 400;
      li {
        cursor: pointer;
      }
    }
    .auth-links {
      gap: 30px;

      list-style: none;

      display: flex;
      justify-content: space-between;
      align-items: center;
      li:first-child {
        cursor: pointer;

        font-size: 16px;
        font-weight: 500;
        border: 1px solid black;
        padding: 6px 16px;
      }
      li:last-child {
        cursor: pointer;

        border: 1px solid black;
        background-color: #000;
        font-size: 16px;
        color: #fafafa;
        padding: 6px 16px;

        font-weight: 500;
      }
    }
  }
`;
