import React from "react";
import { FlexMainBanner } from "./styledFeatureBanner";
import { FlexBannerImage } from "./styledFeatureBanner";
import { GlobalBannerContainer } from "../../../../global/styles/GlobalBannerContainer";

import { NavLink } from "react-router-dom";

import img1 from "../../../../assets/featuresImgs/delivered.webp";
import img2 from "../../../../assets/featuresImgs/guarentee.webp";
import img3 from "../../../../assets/featuresImgs/payment.webp";
import img4 from "../../../../assets/featuresImgs/support.webp";

export const MainFeatureBannerComponent = () => {
  const state = [img1, img2, img3, img4];
  return (
    <GlobalBannerContainer className="bannerContainer">
      <FlexMainBanner>
        {state.map((item, i) => {
          return (
            <div key={i}>
              <NavLink to={`/ad`}>
                <img className="img" src={item} alt="" />
              </NavLink>
            </div>
          );
        })}
      </FlexMainBanner>
    </GlobalBannerContainer>
  );
};

export default MainFeatureBannerComponent;
