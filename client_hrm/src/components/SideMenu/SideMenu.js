import React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
  RedEnvelopeOutlined,
  TeamOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const Silder = styled.div`
width: 234px;
.listmenu{
  background-color: #ADAAAB;
width: 234px;

}



`

export default function SideMenu() {
  const navigator = useNavigate();

  return (
    <Silder style={{ display: "flex", flexDirection: "row", }}>
      <Menu className="listmenu"
        onClick={({ key }) => {
          if (key === "Signout") {
          } else {
            navigator(key);
          }
        }}
        items={[
          { label: "Home", key: "/", icon: <HomeOutlined /> },
          {
            label: "Users List",
            key: "/usermanagement",
            icon: <UnorderedListOutlined />,
          },
          { label: "Salaries", key: "/salaries", icon: <MoneyCollectOutlined /> },
          { label: "Positions", key: "/positions", icon: <TeamOutlined /> },
          { label: "Departments", key: "/department", icon: <RedEnvelopeOutlined /> },
          {
            label: "Signout",
            key: "/",
            icon: <PoweroffOutlined />,
            danger: true,
          },

        ]}
      ></Menu>
    </Silder>
  );
}
