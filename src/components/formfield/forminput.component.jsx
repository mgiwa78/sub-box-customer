import React, { useState } from "react";
import {
  ForminputContainer,
  Input,
  SelectDrpContainer,
  SelectDrpOptionContainer,
  SelectDrpOptionItem,
  SelectDrpValue,
} from "./forminput.style";
const Forminput = ({ placeholder, type }) => {
  return <Input type={type} placeholder={placeholder} />;
};

export const SelectDrp = ({
  items,
  name,
  dropDownValue,
  handleDropAction,
  setValue,
  handleItemAction,
  ...otherPros
}) => {
  const [drpDisplay, setDrpDisplay] = useState(false);

  const handleDropDownAction = () => {
    setDrpDisplay(!drpDisplay);
  };
  return (
    <SelectDrpContainer>
      <SelectDrpValue onClick={() => handleDropDownAction()}>
        <span className="drpLabel"> Select Subscription Plan:</span>{" "}
        {dropDownValue > 1
          ? dropDownValue + " " + name + "s"
          : dropDownValue + " " + name}
      </SelectDrpValue>
      <SelectDrpOptionContainer display={drpDisplay ? "flex" : "none"}>
        {items.map((item) => (
          <SelectDrpOptionItem
            onClick={(e) => handleItemAction(item)}
            key={item}
          >
            {item > 1 ? item + name + "s" : item + name}
          </SelectDrpOptionItem>
        ))}
      </SelectDrpOptionContainer>
    </SelectDrpContainer>
  );
};
export default Forminput;
