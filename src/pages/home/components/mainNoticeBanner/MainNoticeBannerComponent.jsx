import React from "react";

import { useSelector } from "react-redux";
import { firstBanners } from "../../../../layout/layoutSlice";

import { GlobalContainer } from "../../../../global/styles/globalContainer";
import { FlexMainNoticeBanner } from "./styledNoticeBanner";
import { BASE_URL } from "../../../../api/apiClient";

const MainNoticeBannerComponent = () => {
  const state = useSelector(firstBanners);

  return (
    <GlobalContainer>
      <FlexMainNoticeBanner>
        {state.map((item, i) => {
          return (
            <div className="banner" key={i}>
              <img className="banner--img" src={`${BASE_URL}/${item}`} alt="" />
            </div>
          );
        })}
      </FlexMainNoticeBanner>
    </GlobalContainer>
  );
};

export default MainNoticeBannerComponent;
