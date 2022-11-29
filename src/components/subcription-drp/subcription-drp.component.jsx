import React, { useEffect, useState } from "react";
import { AddToCart, ItemPageContainer, LikeIcon } from "./item-page.style";
import AddToCartPath from "../../assets/icon/add-to-cart.svg";
import LikePath from "../../assets/icon/like.svg";
import ItemRow from "../item-row/item-row.component";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { SelectCategories } from "../../store/category/category-selector";
import { FetchAllProducts, FetchProductById } from "../../requests/phpFuncs";
import { SubscriptionDrpContainer } from "./subcription-drp.style";

const SubscriptionDrp = ({ handlesubComponentClick, value, state }) => {
  const Navigate = useNavigate();

  const [ProductToDisplay, setProductToDisplay] = useState([]);
  const { product_id } = useParams();

  // const handlesubComponentClick = (value, state) => {
  //   if (state === "false" && value === "none") return;
  //   if (state === "true" && value === "none") return;
  //   setSubComponentDisplay();
  // };

  return (
    <SubscriptionDrpContainer onClick={handlesubComponentClick} state={state}>
      <div className="subscription-option">
        <span className="sub-label">Subcription:</span>
        <span className="sub-value"> {value}</span>

        {ProductToDisplay.subscription_type ? (
          <div className="sub-option">
            {ProductToDisplay.subscription_type.split("-").map((sub) => (
              <li key={sub}>{sub} month</li>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </SubscriptionDrpContainer>
  );
};

export default SubscriptionDrp;
