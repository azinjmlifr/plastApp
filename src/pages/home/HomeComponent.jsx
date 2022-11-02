import React from "react";

import MainSliderComponent from "./components/mainSlider/MainSliderComponent";
import MainSearchComponent from "./components/mainSearch/MainSearchComponent";
import MainCategoryComponent from "./components/mainCategoy/MainCategoryComponent";
import MainSuggestedComponent from "./components/mainSuggested/MainSuggestedComponent";
import MainNoticeBannerComponent from "./components/mainNoticeBanner/MainNoticeBannerComponent";
import MainShopsComponent from "./components/mainShops/MainShopsComponent";
import MainBannerComponent from "./components/mainBanner/MainBannerComponnet";
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
      <MainSuggestedComponent />
      <MainNoticeBannerComponent />
      <MainShopsComponent title={HomeLan.mainTopShops_title} />
      <MainBannerComponent />
      <MainShopsComponent title={HomeLan.mainPopularShops_title} />
      <MainBannerComponent />
      <MainSuggestedComponent />
    </div>
  );
};

export default HomeComponent;
