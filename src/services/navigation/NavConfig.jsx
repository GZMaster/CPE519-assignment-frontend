import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Main from "../pages";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
