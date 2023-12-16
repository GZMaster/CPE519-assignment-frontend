import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../../App";
import Main, { LoginPage } from "../../pages";

const NavConfig = () => {
  // const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
