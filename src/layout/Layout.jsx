import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import Navigation from "../components/navigation/Navigation";
import { MAIN_BANNERS } from "../service/homeService";
import { getAllbanners } from "./layoutSlice";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllbanners(MAIN_BANNERS));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
