import React from "react";
import HeaderTheme from "../../components/HeaderTheme/HeaderTheme";
import FooterTheme from "../../components/FooterTheme/FooterTheme";
import SideMenu from "../../components/SideMenu/SideMenu";
import styled from "styled-components";


const Content = styled.div`
margin: auto;
// background-color: red;
align-items: center;
width: 1351px;
height: 590px;
margin-top:15px;
`
export default function Layout({ children }) {
  return (
    <div>
      <HeaderTheme />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideMenu/>
        <Content>

          {children}
        </Content>
      </div>
      <FooterTheme className="bg-black" />
    </div>
  );
}
