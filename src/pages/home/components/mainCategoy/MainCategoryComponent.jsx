import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Typography } from "@mui/material";

import {
  categoryStatus,
  getAllCategories,
  mainCategories,
} from "./mainCategorySlice";

import { GlobalContainer } from "../../../../global/styles/globalContainer";
import { HomeLan } from "../../../../json/language/fa";
import { MAIN_CATEGORIES } from "../../../../service/homeService";
import { FlexMainCateogry } from "./styledMainCategory";
import SkeltonLoader from "../../../../components/skeletonLoader/SkeltonLoader";

const MainCategoryComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector(mainCategories);
  const status = useSelector(categoryStatus);

  useEffect(() => {
    if (state.length <= 0) {
      dispatch(getAllCategories(MAIN_CATEGORIES));
    }
  }, [state.length, dispatch]);

  return (
    <GlobalContainer style={{ padding: "30px 0px" }}>
      <Typography component="h2" variant="h2" textAlign="center" marginY={4}>
        {HomeLan.mainCategory_Title}
      </Typography>
      <FlexMainCateogry>
        {status === "loading" ? <SkeltonLoader /> : null}
        {state.map((item) => {
          return (
            <div className="category_box" key={item.id}>
              <Link to={`/category/${item.id}`} className="category_box--link">
                <img src={item.logo} alt="" className="category_box--img" />
              </Link>
              <h3 className="category_box--title">{item.title}</h3>
            </div>
          );
        })}
      </FlexMainCateogry>
    </GlobalContainer>
  );
};

export default MainCategoryComponent;
