import React from "react";

import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import HomeComponent from "../pages/home/HomeComponent";

const AppContent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </Layout>
  );
};

export default AppContent;
