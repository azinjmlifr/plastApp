import { configureStore } from "@reduxjs/toolkit";

import homeSliderReducer from "../pages/home/components/mainSlider/mainSliderSlice";
import homeCategoriesReducer from "../pages/home/components/mainCategoy/mainCategorySlice";
import homeSuggestedReducer from "../pages/home/components/mainSuggested/mainSuggestedSlice";
import mainBannerReducer from "../layout/layoutSlice";
import homePopularReducer from "../pages/home/components/mainPopularProducts/mainPopularSlice";
import homeSomeproductsReducer from "../pages/home/components/mainProducts/MainProductsSlice";

export default configureStore({
  reducer: {
    homeSliderReducer,
    homeCategoriesReducer,
    homeSuggestedReducer,
    mainBannerReducer,
    homePopularReducer,
    homeSomeproductsReducer,
  },
});
