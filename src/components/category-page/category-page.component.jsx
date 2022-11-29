import React, { useEffect, useState } from "react";
import {
  AddToCart,
  CategoryPageContainer,
  LikeIcon,
} from "./category-page.style";
import S from "string";
import AddToCartPath from "../../assets/icon/add-to-cart.svg";
import LikePath from "../../assets/icon/like.svg";
import CategoryRow from "../item-row/item-row.component";
import CatProductItem from "../category-product-item/category-product-item.component";
import { useSelector } from "react-redux";
import { SelectCategories } from "../../store/category/category-selector";
import { useNavigate, useParams } from "react-router";
import { FetchProductsByCategory } from "../../requests/phpFuncs";

const CategoryPage = () => {
  const Navigate = useNavigate();
  const Categories = useSelector(SelectCategories);
  const param = useParams();

  const [CategoriesOptions, setCategoriesOptions] = useState([]);
  const [CategoriesData, setCategoriesData] = useState([]);
  const [ProductsToDisplay, setProductsToDisplay] = useState([]);
  const { category_name } = useParams();

  useEffect(() => {
    if (!Categories.length) return;
    setCategoriesOptions(Categories);
  }, [Categories]);

  useEffect(() => {
    if (CategoriesOptions.length === 0) return setProductsToDisplay([]);

    const catId = CategoriesOptions.find(
      (cat) => cat.category_name.toLowerCase() === category_name
    );
    setCategoriesData(catId);
    handleFetchProductsByCategory(catId);
  }, [category_name, CategoriesOptions]);

  const handleFetchProductsByCategory = async (catData) => {
    const ProductByCategoryData = await FetchProductsByCategory(
      Number(catData.category_id)
    );
    console.log(ProductByCategoryData);
    setProductsToDisplay(ProductByCategoryData);
  };

  return (
    <CategoryPageContainer>
      {console.log()}
      <div className="container">
        <div className="category-page-title">
          <div className="title">{S(category_name).capitalize().s}</div>
          <div className="short-dec">{CategoriesData.category_description}</div>
        </div>
        <div className="display">
          <div className="left">
            <ul>
              {CategoriesOptions.map((pc) => (
                <li
                  onClick={() =>
                    Navigate(`/category/${pc.category_name.toLowerCase()}`)
                  }
                  key={pc.category_id}
                >
                  {pc.category_name}
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <div className="category-page-header">
              <div className="category-page-dir">
                Home / Categories / {S(category_name).capitalize().s}
              </div>
              <div className="category-page-actions">
                <AddToCart src={AddToCartPath} />
                <LikeIcon src={LikePath} />
              </div>
            </div>
            <div className="item-row">
              {ProductsToDisplay.length === 0 ? (
                <div className="err_messg">Not Products</div>
              ) : (
                ProductsToDisplay.map((product) => {
                  return (
                    <CatProductItem
                      key={product.product_id}
                      itemProps={product}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </CategoryPageContainer>
  );
};

export default CategoryPage;
