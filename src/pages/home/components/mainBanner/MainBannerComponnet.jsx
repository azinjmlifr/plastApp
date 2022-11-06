import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { BASE_URL } from "../../../../api/apiClient";
import { FlexMainBanner } from "./styledMainBanner";
import { FlexBannerImage } from "./styledBannerImage";
// import { firstBanners } from "../../../../layout/layoutSlice";
// import { getAllBannerImg, mainBanner, BannerStatus } from "./mainBannerSLice";
// import { MAIN_BANNERS } from "../../../../service/homeService";
import { GlobalBannerContainer } from "../../../../global/styles/GlobalBannerContainer";
import { NavLink } from "react-router-dom";

import img1 from "../../../../assets/adImgs/ad1.webp";
import img2 from "../../../../assets/adImgs/ad2.webp";
import img3 from "../../../../assets/adImgs/ad3.webp";

export const MainBannerComponnet = () => {
  // const dispatch = useDispatch();
  // const state = useSelector(mainBanner);
  // const status = useSelector(BannerStatus);

  // useEffect(() => {
  //   if (state.length <= 0) {
  //     dispatch(getAllBannerImg(MAIN_BANNERS));
  //   }

  //   console.log
  // }, [state.length, dispatch]);

  const state = [img1, img2, img3, img1];
  return (
    <GlobalBannerContainer className="bannerContainer">
      <FlexMainBanner>
        {state.map((item, i) => {
          return (
            <FlexBannerImage key={i}>
              <NavLink to={`/ad`}>
                <img className="img" src={item} alt="" />
              </NavLink>
            </FlexBannerImage>
          );
        })}
      </FlexMainBanner>
    </GlobalBannerContainer>
  );
};

export default MainBannerComponnet;
