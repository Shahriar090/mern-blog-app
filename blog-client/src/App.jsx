import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
