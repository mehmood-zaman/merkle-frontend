import React, { useState } from "react";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import NavMenu from "../NavMenu/index";
import { LogoWrapper } from "./styles";
import LogoPrimary from "Assets/Logos/LogoPrimary";
// import CollapseLogo from "Assets/Icons/CollapsedLogo";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Sider
      collapsible
      width={250}
      collapsedWidth={80}
      collapsed={collapsed}
      onCollapse={(c) => setCollapsed(c)}
      theme="light"
    >
      <LogoWrapper onClick={() => navigate("/")}>
        {collapsed ? (
          <div style={{ width: 70 }}>
            <LogoPrimary width={150} />
          </div>
        ) : (
          <LogoPrimary width={190} />
        )}
      </LogoWrapper>

      <NavMenu collapsed={collapsed} />
    </Sider>
  );
};

export default Sidebar;
