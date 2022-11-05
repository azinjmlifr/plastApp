import React from "react";

import MainSliderComponent from "./components/mainSlider/MainSliderComponent";
import MainSearchComponent from "./components/mainSearch/MainSearchComponent";
import MainCategoryComponent from "./components/mainCategoy/MainCategoryComponent";
import MainSuggestedComponent from "./components/mainSuggested/MainSuggestedComponent";
import MainNoticeBannerComponent from "./components/mainNoticeBanner/MainNoticeBannerComponent";
import MainShopsComponent from "./components/mainShops/MainShopsComponent";
import MainBannerComponent from "./components/mainBanner/MainBannerComponnet";
import MainProductsComponent from "./components/mainProducts/MainProductsComponent";
import MainFeatureBannerComponent from "./components/mainFeatureBanner/MainFeatureBannerComponent";
import MainWonderfullyComponent from "./components/mainWonderfully/MainWonderfullyComponent";
import MainPopularProducts from "./components/mainPopularProducts/MainPopularProducts";
import MainGoToWonderfully from "./components/mainGoToWonderfullyDiv/mainGoToWonderfully";

import { HomeLan } from "../../json/language/fa";

// import { useSelector } from "react-redux";
// import { firstBanners } from "../../../../layout/layoutSlice";

const HomeComponent = () => {
  // const state = useSelector(firstBanners);
  return (
    <div>
      <MainSliderComponent />
      <MainSearchComponent />
      <MainCategoryComponent />
      <MainSuggestedComponent title={HomeLan.mainSuggested_title} />
      <MainNoticeBannerComponent />
      <MainShopsComponent title={HomeLan.mainTopShops_title} />
      <MainBannerComponent />
      <MainShopsComponent title={HomeLan.mainPopularShops_title} />
      <MainBannerComponent />
      <MainProductsComponent title={HomeLan.mainAllProducts_title} />
      <MainFeatureBannerComponent />
      <MainWonderfullyComponent />
      <MainBannerComponent />
      <MainPopularProducts />
      <MainNoticeBannerComponent />
    </div>
  );
};

export default HomeComponent;
