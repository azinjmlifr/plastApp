import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Typography } from "@mui/material";

import { GlobalContainer } from "../../../../global/styles/globalContainer";
import { FlexMainSuggested } from "./styledMainSuggested";

import { getAllSuggested, mainSuggestedProducts } from "./mainSuggestedSlice";

import bannerImg from "../../../../assets/imgs/offer-banner.jpg";

import { MAIN_SUGGESTED_PRODUCTS } from "../../../../service/homeService";

import { HomeLan } from "../../../../json/language/fa";

const MainSuggestedComponent = ({ title }) => {
  const dispatch = useDispatch();
  const state = useSelector(mainSuggestedProducts);

  useEffect(() => {
    if (state.length <= 0) {
      // dispatch(getAllSuggested(MAIN_SUGGESTED_PRODUCTS));
    }
  }, [state.length, dispatch]);

  return (
    <GlobalContainer>
      <Typography component="h2" variant="h2" textAlign="center" marginY={4}>
        {title}
      </Typography>

      <FlexMainSuggested className="rounded-1 hidden p10 ">
        <div className="banner">
          <img src={bannerImg} alt="" className="banner--img" />
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="custom_swiper "
        >
          <SwiperSlide className="slide p10">Slide 1</SwiperSlide>
          <SwiperSlide className="slide p10">Slide 2</SwiperSlide>
          <SwiperSlide className="slide p10">Slide 3</SwiperSlide>
          <SwiperSlide className="slide p10">Slide 4</SwiperSlide>
          <SwiperSlide className="slide p10">Slide 5</SwiperSlide>
          <SwiperSlide className="slide p10">Slide 6</SwiperSlide>
          <SwiperSlide className="slide p10">Slide 7</SwiperSlide>
          <SwiperSlide className="slide p10">Slide 8</SwiperSlide>
          <SwiperSlide className="slide p10">Slide 9</SwiperSlide>
        </Swiper>
      </FlexMainSuggested>
    </GlobalContainer>
  );
};

export default MainSuggestedComponent;
