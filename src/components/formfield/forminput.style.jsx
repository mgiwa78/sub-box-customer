import styled, { css } from "styled-components/macro";

export const Input = styled.input`
  width: 350px;
  border: 1px solid #e5e7ea;
  border-radius: 2px;
  height: 40px;
  font-size: 15px;
  padding-left: 20px;
  font-weight: 500;
  transform-origin: left;
`;

export const SelectDrpContainer = styled.div`
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
`;
export const SelectDrpValue = styled.h4`
  font-size: 12px;
  width: 100%;
  cursor: pointer;
  font-weight: 500;
  color: #cfcfcf;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .drpLabel {
    color: #000;
    font-weight: 500;
  }
`;
export const SelectDrpOptionContainer = styled.ul`
  ${({ display }) => css`
    display: ${display};
  `}
  position: absolute;
  align-items: center;
  justify-content: space-between;
  bottom: -56px;
  right: -1px;
  width: calc(100% - 30px);
  padding: 15px;
  z-index: 2;
  background-color: #fff;
  border: 1px solid #cfcfcf;
  border-top: 1px solid #fff;
  gap: 15px;
`;
export const SelectDrpOptionItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  width: 200px;
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
`;
