import React, { useState } from "react";

import { Link } from "react-router-dom";
//mui components---------------------
import { IconButton } from "@mui/material";
import { styled } from "@mui/material";
//mui icons--------------------------
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import {
  FlexNavContainer,
  StyledNav,
  StyledNavLeftBar,
  StyledNavLogo,
} from "./styledNav/styledNav";
import { GlobalContainer } from "../../global/styles/globalContainer";

// images------------------------
import imgLogo from "../../assets/imgs/plastAppLogo.png";

import { navLan } from "../../json/language/fa";
import { GlobalButton } from "../../global/styles/GlobalButton";
import { globalCssVar } from "../../global/styles/globalStyles";

const MainMenuButton = styled(IconButton)({
  fontSize: "2.5rem",
  backgroundColor: "var(--light-blue)",
  color: "#121212",
});

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <StyledNav>
      <GlobalContainer>
        <FlexNavContainer>
          <MainMenuButton onClick={handleToggleMenu}>
            {isOpen ? (
              <CloseOutlinedIcon fontSize="inherit" />
            ) : (
              <MenuIcon fontSize="inherit" />
            )}
          </MainMenuButton>

          <StyledNavLogo>
            <Link to="/">
              <img src={imgLogo} alt="logo" />
            </Link>
          </StyledNavLogo>

          <StyledNavLeftBar>
            <GlobalButton color={globalCssVar.light_blue}>
              {navLan.login_button}
            </GlobalButton>

            <Link to="/cart">
              <MainMenuButton>
                <ShoppingBagOutlinedIcon fontSize="inherit" />
              </MainMenuButton>
            </Link>
          </StyledNavLeftBar>
        </FlexNavContainer>
      </GlobalContainer>
    </StyledNav>
  );
};

export default Navigation;
