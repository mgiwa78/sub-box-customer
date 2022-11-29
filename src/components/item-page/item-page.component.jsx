import React, { useEffect, useState } from "react";
import { AddToCart, ItemPageContainer, LikeIcon } from "./item-page.style";
import AddToCartPath from "../../assets/icon/add-to-cart.svg";
import LikePath from "../../assets/icon/like.svg";
import ItemRow from "../item-row/item-row.component";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { SelectCategories } from "../../store/category/category-selector";
import { FetchAllProducts, FetchProductById } from "../../requests/phpFuncs";
import Forminput, { SelectDrp } from "../formfield/forminput.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ItemPage = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const CartItems = useSelector(selectCartItems);

  const [CategoriesData, setCategoriesData] = useState([]);
  const [ProductToDisplay, setProductToDisplay] = useState([]);
  const { product_id } = useParams();

  const [subComponentDisplay, setSubComponentDisplay] = useState({
    value: "Pick a sub plan",
    state: false,
  });
  const { value, state } = subComponentDisplay;

  const handleItemAction = (item) => {
    console.log(item);
    setSubComponentDisplay({ ...subComponentDisplay, value: item });
  };

  useEffect(() => {
    // const catId = CategoriesOptions.find(
    //   (cat) => cat.category_name.toLowerCase() === category_name
    // );
    // setCategoriesData(catId);
    handleFetchProductsByCategory(product_id);
  }, [product_id]);

  const handleFetchProductsByCategory = async (product_id) => {
    const ProductByIdData = await FetchProductById(Number(product_id));
    setProductToDisplay(ProductByIdData);
  };

  const handleAddCartItem = (ProductToDisplay) => {
    dispatch(addItemToCart(CartItems, ProductToDisplay));
  };

  return (
    <ItemPageContainer
      subcomponentState={state}
      imgPath={
        `http://localhost/ecom-back/upload/` + ProductToDisplay.product_images
      }
    >
      <div className="container">
        {ProductToDisplay ? (
          <div className="item">
            <div className="item-page-header">
              <div className="item-page-dir">
                Home / Sneakers / {ProductToDisplay.product_name}
              </div>
              <div className="item-page-actions">
                <AddToCart src={AddToCartPath} />
                <LikeIcon src={LikePath} />
              </div>
            </div>
            <div className="item-page-title">
              <div className="title">{ProductToDisplay.product_name}</div>
              <div className="short-dec">{ProductToDisplay.description}</div>
            </div>
            <div className="item-details-section">
              <div className="item-image"></div>
              <div className="item-props">
                <div className="price">₦{ProductToDisplay.product_price}</div>

                {ProductToDisplay.subscription_type ? (
                  <SelectDrp
                    handleItemAction={handleItemAction}
                    name={"month"}
                    dropDownValue={subComponentDisplay.value}
                    items={ProductToDisplay.subscription_type.split("-")}
                  />
                ) : (
                  ""
                )}
                {/* <span className="unit-label">Unit:</span> */}
                <Forminput
                  type="number"
                  className="subscription-unit"
                  placeholder="Units"
                />
                <div className="actions">
                  <div
                    className="buy-btn"
                    onClick={() => handleAddCartItem(ProductToDisplay)}
                  >
                    Add To Cart
                  </div>
                  <div className="add-to-fav">Add To Favorite</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <ItemRow title="Related Products" />
      </div>
    </ItemPageContainer>
  );
};

export default ItemPage;
