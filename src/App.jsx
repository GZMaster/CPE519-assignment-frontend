import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthProvider from "./services/authentication/AuthProvider";
import { AuthContext } from "./services/authentication/AuthContext";
// import { Navbar, Footer } from "./components";
import "./styles/App.scss";

export default function App() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <AuthProvider>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </AuthProvider>
  );
}
