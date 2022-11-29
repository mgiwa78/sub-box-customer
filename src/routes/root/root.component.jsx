import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import CategoryMenu from "../../components/category-menu/category-menu.component";
import Header from "../../components/header/header.component";
import ItemRow from "../../components/item-row/item-row.component";
import { FetchAllCategories } from "../../requests/phpFuncs";
import { SetCategoryAction } from "../../store/category/category-actions";
import { SelectCategories } from "../../store/category/category-selector";

import { RootContainer } from "./root.styles";

const Root = () => {
  const Categories = useSelector(SelectCategories);
  const dispatch = useDispatch();

  const HandleAppInit = async () => {
    const catdata = await FetchAllCategories();
    dispatch(SetCategoryAction(catdata));
  };
  useEffect(() => {
    HandleAppInit();
  }, []);
  const InitApp = () => {};
  return (
    <RootContainer>
      <Header />

      <Outlet />
    </RootContainer>
  );
};

export default Root;
