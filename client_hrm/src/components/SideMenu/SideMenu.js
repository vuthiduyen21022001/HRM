import React from "react";
import {Menu} from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
export default function SideMenu() {
  const navigator = useNavigate();

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <Menu
        onClick={({key}) => {
          if (key === "Signout") {
          } else {
            navigator(key);
          }
        }}
        items={[
          {label: "Home", key: "/", icon: <HomeOutlined />},
          {
            label: "Users List",
            key: "/usermanagement",
            icon: <UnorderedListOutlined />,
          },
          {label: "Salaries", key: "/salaries", icon: <MoneyCollectOutlined />},
          {
            label: "Signout",
            key: "/",
            icon: <PoweroffOutlined />,
            danger: true,
          },
        ]}
      ></Menu>
    </div>
  );
}
