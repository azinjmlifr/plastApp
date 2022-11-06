import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { firstBanners } from "../../../../layout/layoutSlice";
import { GlobalContainer } from "../../../../global/styles/globalContainer";
import { FlexMainNoticeBanner } from "./styledNoticeBanner";
import { BASE_URL } from "../../../../api/apiClient";
// import img from "../../../../assets/imgs/"

const MainNoticeBannerComponent = () => {
  const state = useSelector(firstBanners);
  const data = Object.values(state);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <GlobalContainer>
      <FlexMainNoticeBanner>
        {data.map((item, i) => {
          return (
            <div className="banner" key={i}>
              <img
                className="banner--img"
                crossOrigin="true"
                src={`${BASE_URL}/${item}`}
                alt=""
              />
            </div>
          );
        })}
      </FlexMainNoticeBanner>
    </GlobalContainer>
  );
};

export default MainNoticeBannerComponent;
