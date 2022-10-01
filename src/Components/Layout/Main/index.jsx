import { useCallback, useEffect } from "react";
import { Col, Image, Layout, Row } from "antd";
import { LayoutWrapper } from "./styles";
import Sidebar from "Components/Shared/Sidebar";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography, Input, Select } from "antd";
import React, { useState } from "react";
import profile from "Assets/Images/profile.png";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "Components/Shared/LoadingSpinner";
import SearchIcon from "Assets/Icons/SearchIcon";

import { debounce } from "lodash";
import { SearchMovies } from "Redux/App/Actions/MoviesSearch";
import { useDispatch } from "react-redux";
const { Content } = Layout;
const { Header } = Layout;

const CustomLayout = ({ children }) => {
  const [input, setInput] = useState({
    title: "",
    type: "movie",
    year: "",
  });
  const dispatch = useDispatch();

  const now = new Date().getUTCFullYear();
  const years = Array(now - (now - 73))
    .fill("")
    .map((v, idx) => now - idx);
  const request = debounce((value) => {
    setInput({ ...input, title: value });
  }, 1000);

  const debouceRequest = useCallback((value) => request(value), [request]);

  const onChange = (e) => {
    debouceRequest(e.target.value);
  };

  useEffect(() => {
    dispatch(
      SearchMovies({ title: input.title, type: input.type, year: input.year })
    );
  }, [input, dispatch]);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { Option } = Select;

  const menu = (
    <Menu
      selectable
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: "1",
          label: (
            <div
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }, 2000);
              }}
            >
              Log Out
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <LayoutWrapper>
      <Layout className="layout-container">
        <Sidebar />
        <Layout className="site-layout">
          <Header className="nav-fixed header-bg-color ">
            <Row justify="space-between">
              <Col className="col-adjust">
                <Input
                  placeholder="Search Movies"
                  prefix={<SearchIcon />}
                  onChange={onChange}
                />
                <Select
                  placeholder="Please select the movie type"
                  onChange={(value) => setInput({ ...input, type: value })}
                  defaultValue="movie"
                >
                  <Option value="movie">Movie</Option>
                  <Option value="series">Series</Option>
                  <Option value="episode">Episode</Option>
                </Select>
                <Select
                  placeholder="Please select the movie year"
                  onChange={(value) => setInput({ ...input, year: value })}
                >
                  {years.map((year, i) => (
                    <Option value={year}>{year}</Option>
                  ))}
                </Select>
              </Col>
              <Col span={4}>
                <div className="user-profile">
                  <Dropdown
                    trigger={["click"]}
                    overlay={menu}
                    placement="bottomRight"
                  >
                    <Typography.Link>
                      <Space>
                        {loading && <LoadingSpinner />}
                        <Image src={profile} preview={false} />
                        <DownOutlined />
                      </Space>
                    </Typography.Link>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </Header>
          <Content className="content-padding">{children}</Content>
        </Layout>
      </Layout>
    </LayoutWrapper>
  );
};

export default CustomLayout;
