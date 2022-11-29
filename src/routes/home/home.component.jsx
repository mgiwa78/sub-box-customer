import React, { useEffect, useState } from "react";
import CategoryMenu from "../../components/category-menu/category-menu.component";
import Header from "../../components/header/header.component";
import ItemRow from "../../components/item-row/item-row.component";
import { FetchAllCategories, FetchAllVendors } from "../../requests/phpFuncs";
import { HomeContainer } from "./home.styles";

const Home = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [productVendors, setProductVendors] = useState([]);
  useEffect(() => {
    if (productCategories.length !== 0) return;

    const productCategoriesData = async function name(params) {
      try {
        const categoriesData = await FetchAllCategories();
        const vendorsData = await FetchAllVendors();

        setProductCategories(categoriesData);
        setProductVendors(vendorsData);
      } catch (error) {}
    };
    productCategoriesData();
  }, [productCategories]);
  return (
    <HomeContainer>
      <CategoryMenu productCategories={productCategories} />
      <div className="container">
        <ItemRow title={"Products"} />
      </div>
    </HomeContainer>
  );
};

export default Home;
