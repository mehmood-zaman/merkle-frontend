import React, { useState } from "react";
import { Menu } from "antd";
import { MenuWrapper } from "./styles";
import { useNavigate, Link } from "react-router-dom";
import MovieSearchIcon from "Assets/Icons/MovieSearchIcon";

const NavMenu = ({ collapsed }) => {
  const [current, setCurrent] = useState("Search Movies");

  const navigate = useNavigate();
  const onClick = (e) => {
    setCurrent(e.key);
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(
      <Link to="/">Search Movies</Link>,
      "Search Movies",
      <div
        onClick={() => navigate("/")}
        style={collapsed ? { marginTop: 6 } : { marginTop: 12 }}
      >
        <MovieSearchIcon
          fill={current === "Search Movies" ? "#ffc704" : "#BDBDBD"}
        />
      </div>
    ),
  ];

  return (
    <MenuWrapper>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        theme="light"
        items={items}
      />
    </MenuWrapper>
  );
};

export default NavMenu;
