import React from "react";
import { CatProductItemContainer } from "./category-product-item.style";
import searchPath from "../../assets/icon/search.svg";
import { useNavigate } from "react-router";

const CatProductItem = ({ itemProps }) => {
  const Navigate = useNavigate();
  const { product_name, product_price, product_images, unit, product_id } =
    itemProps;

  const handleNavigateToProductPage = (product_id) => {
    Navigate(`/item-page/${product_id}`);
  };

  return (
    <CatProductItemContainer
      onClick={() => handleNavigateToProductPage(product_id)}
      imgPath={`http://localhost/ecom-back/upload/` + product_images}
    >
      <div className="product-img"></div>
      <div className="product-details">
        <div className="name">{product_name}</div>
        <div className="price">
          <span className="price-value">₦{product_price}</span>
        </div>
        <div className="unit">
          <span className="unit-value">Unit: {unit}</span>
        </div>
      </div>
    </CatProductItemContainer>
  );
};

export default CatProductItem;
