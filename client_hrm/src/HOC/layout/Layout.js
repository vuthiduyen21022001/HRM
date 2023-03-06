import React from "react";
import HeaderTheme from "../../components/HeaderTheme/HeaderTheme";
import FooterTheme from "../../components/FooterTheme/FooterTheme";
import SideMenu from "../../components/SideMenu/SideMenu";
export default function Layout({children}) {
  return (
    <div>
      <HeaderTheme />
      <div style={{display: "flex", flexDirection: "row"}}>
        <SideMenu />
        {children}
      </div>
      <FooterTheme className="bg-black" />
    </div>
  );
}
