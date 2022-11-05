import React from "react";
import { FlexFooterContainer } from "./styledFooterContainer";
import { HomeLan } from "../../json/language/fa";
import { GlobalContainer } from "../../global/styles/globalContainer";
import { NavLink } from "react-router-dom";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SamanBank from "../../assets/footerImgs/Saman.png";
import kasboKar from "../../assets/footerImgs/KasboKar.png";
import Etemad from "../../assets/footerImgs/Etemad.png";

const Footer = () => {
  const FirstRow = () => {
    return (
      <ul className="footer_menu">
        <li className="footer_menu--item">
          <NavLink to={`/asignment`}>
            {HomeLan.footerFirstRowFirstColumn_title}
          </NavLink>
        </li>
        <li className="footer_menu--item">
          <NavLink to={`/terms-credit`}>
            {HomeLan.footerFirstRowSecondColumn_title}
          </NavLink>
        </li>
        <li className="footer_menu--item">
          <NavLink to={`/support`}>
            {HomeLan.footerFirstRowThirdColumn_title}
          </NavLink>
        </li>
        <li className="footer_menu--item">
          <NavLink to={`/rules`}>
            {HomeLan.footerFirstRowFourthColumn_title}
          </NavLink>
        </li>
        <li className="footer_menu--item">
          <NavLink to={`/create-shop`}>
            {HomeLan.footerFirstRowFifthColumn_title}
          </NavLink>
        </li>
      </ul>
    );
  };
  const SecondRow = () => {
    return (
      <GlobalContainer>
        <div className="second-row">
          <div className="second-row-icons-div ">
            <div>
              <a
                href="https://instagram.com/plastapp"
                className="second-row-icon"
              >
                <InstagramIcon fontSize="inherit" />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/plastapp"
                className="second-row-icon"
              >
                <TwitterIcon fontSize="inherit" />
              </a>
            </div>
            <div>
              <a href="https://t.me/plastapp" className="second-row-icon">
                <TelegramIcon fontSize="inherit" />
              </a>
            </div>
            <div>
              <a
                href="https://facebook.com/plastapp"
                className="second-row-icon"
              >
                <FacebookIcon fontSize="inherit" />
              </a>
            </div>
          </div>
          <div className="second-row-support-div">
            <div className="second-row-icon-headphone">
              <HeadphonesIcon fontSize="inherit" />
            </div>
            <div className="second-row-support">
              <div>{HomeLan.footer24Support}</div>
              <div className="second-row-support-number">
                {HomeLan.footerPhoneNumberSupport}
              </div>
            </div>
          </div>
          <div className="second-row-imgs-div">
            <div>
              <img
                src={SamanBank}
                alt="samanBank"
                className=" second-row-img"
              />
            </div>
            <div>
              <a href="https://ecunion.ir/verify/plastapp.ir?token=817200060e95c205cc36">
                <img
                  src={kasboKar}
                  alt="kasbokar"
                  className=" second-row-img"
                />
              </a>
            </div>
            <div>
              <a href="https://trustseal.enamad.ir/Error/ErrorReferrer">
                <img src={Etemad} alt="etemad" className=" second-row-img" />
              </a>
            </div>
          </div>
        </div>
      </GlobalContainer>
    );
  };

  const ThirdRow = () => {
    return <div className="third-row-title"> {HomeLan.footerLastTitle}</div>;
  };
  return (
    <footer>
      <FlexFooterContainer>
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </FlexFooterContainer>
    </footer>
  );
};

export default Footer;
