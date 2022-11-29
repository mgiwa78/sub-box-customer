import React, { useEffect, useState } from "react";
import { ItemRowContainer } from "./item-row.style";
import searchPath from "../../assets/icon/search.svg";
import ProductItem from "../product-item/product-item.component";
import { FetchAllProducts } from "../../requests/phpFuncs";
const ItemRow = ({ title }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    try {
      const handleFetchAllProducts = async function name(params) {
        const Pdata = await FetchAllProducts();
        setProductsData(Pdata);
      };
      handleFetchAllProducts();
    } catch (error) {
      alert(error);
    }
  }, []);
  const products = [
    { name: "Jordan 1 Retro High OG", img: 1, price: "15,400" },
    { name: "Jordan 4 Retro", img: 2, price: "36,800" },
    { name: "Nike Dunk Low Retro", img: 3, price: "19,200" },
  ];
  return (
    <ItemRowContainer>
      <div className="title">{title}</div>
      <div className="item-row">
        {productsData.map((product) => {
          return (
            <ProductItem
              item={product}
              key={product.product_id}
              itemProps={product}
            />
          );
        })}
      </div>
    </ItemRowContainer>
  );
};

export default ItemRow;
