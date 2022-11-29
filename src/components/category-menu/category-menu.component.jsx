import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SelectCategories } from "../../store/category/category-selector";
import { CategoryMenuContainer, SearchIcon } from "./category-menu.style";
const CategoryMenu = ({ productCategories }) => {
  const Categories = useSelector(SelectCategories);

  const [CategoriesOptions, setCategoriesOptions] = useState([]);

  useEffect(() => {
    if (!Categories.length) return;
    setCategoriesOptions(Categories);
  }, [Categories]);

  const Navigate = useNavigate();
  return (
    <CategoryMenuContainer>
      <ul className="links">
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
        {/* <li>Women</li>
        <li>Kids & Teen</li>
        <li>Entertainment</li>
        <li>Food & Drinks</li>
        <li>Books & Personal Growth</li>
        <li>Bath & Beauty</li> */}
      </ul>
    </CategoryMenuContainer>
  );
};

export default CategoryMenu;
