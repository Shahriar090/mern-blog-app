import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";

export default function App() {
  const location = useLocation();
  const noFooter = location.pathname.includes("dashboard");
  return (
    <div>
      <Header />
      <Outlet />
      {noFooter || <FooterComponent />}
    </div>
  );
}
