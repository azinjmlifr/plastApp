import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { BASE_URL } from "../../../../api/apiClient";
import { FlexMainBanner } from "./styledMainWonderfully";
// import { FlexWonderfullyImage } from "./styledWonderfullyImg";
// import { FlexBannerDiv } from "./styledWonderfullyGoToProducts";
// import { firstBanners } from "../../../../layout/layoutSlice";
// import { getAllBannerImg, mainBanner, BannerStatus } from "./mainBannerSLice";
// import { MAIN_BANNERS } from "../../../../service/homeService";
import { GlobalBannerContainer } from "../../../../global/styles/GlobalBannerContainer";
import { NavLink } from "react-router-dom";
import arrowImg from "../../../../assets/imgs/arrow.png";

import img1 from "../../../../assets/adImgs/ad1.webp";
import img2 from "../../../../assets/adImgs/ad2.webp";

import basketImg from "../../../../assets/imgs/basket.png";
import wonderImg from "../../../../assets/imgs/wonder.png";

import MainGoToWonderfully from "../mainGoToWonderfullyDiv/mainGoToWonderfully";
import { HomeLan } from "../../../../json/language/fa";

export const MainBannerComponnet = ({ discount }) => {
  // const dispatch = useDispatch();
  // const state = useSelector(mainBanner);
  // const status = useSelector(BannerStatus);

  // useEffect(() => {
  //   if (state.length <= 0) {
  //     dispatch(getAllBannerImg(MAIN_BANNERS));
  //   }
  // }, [state.length, dispatch]);

  // const state = [img1, img2];
  return (
    <GlobalBannerContainer
      style={{
        backgroundColor: "#EAEFE8",
      }}
    >
      <FlexMainBanner>
        <div className="basketImg-div">
          <img src={basketImg} className="basketImg" />
        </div>
        <div className="wonderImg-div">
          <img src={wonderImg} className="wonderImg" />
        </div>
        <div className="discount-div">
          <p className="discountDiv--discountTitle">
            تا % <span> {discount} </span> تخفیف
          </p>
        </div>
        <div className="products-div">
          <MainGoToWonderfully />
        </div>
      </FlexMainBanner>
    </GlobalBannerContainer>
  );
};

export default MainBannerComponnet;
