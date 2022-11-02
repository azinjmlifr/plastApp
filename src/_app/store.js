import { configureStore } from "@reduxjs/toolkit";

import homeSliderReducer from "../pages/home/components/mainSlider/mainSliderSlice";
import homeCategoriesReducer from "../pages/home/components/mainCategoy/mainCategorySlice";
import homeSuggestedReducer from "../pages/home/components/mainSuggested/mainSuggestedSlice";
import mainBannerReducer from "../layout/layoutSlice";

export default configureStore({
  reducer: {
    homeSliderReducer,
    homeCategoriesReducer,
    homeSuggestedReducer,
    mainBannerReducer,
  },
});
