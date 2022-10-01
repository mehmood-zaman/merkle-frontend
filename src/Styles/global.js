import styled from "styled-components";

export const CustomInput = styled.div`
  .ant-input,
  .ant-input-password {
    background: #f8f9fa;
    border-radius: 4px;
    height: 45px;
    max-width: 525px;
  }

  .ant-input-affix-wrapper > input.ant-input {
    height: 35px;
  }
  .ant-input-suffix {
    display: none;
  }
`;

export const CustomButton = styled.div`
  max-width: ${(props) => props.width}px;

  .ant-btn {
    background: #27ae60;
    border-radius: 4px;
    width: 100%;
    height: 45px;
    color: #fff;
  }
  .ant-btn:hover {
    background-color: rgba(33, 150, 83, 0.9);
    border: 1px solid rgba(33, 150, 83, 0.9);
  }
`;

export const Header = styled.div`
  height: 72px;
  width: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
`;

export const ParentWrapper = styled.div`
  .ant-modal-content,
  .ant-modal-header {
    border-radius: 10px !important;
  }
  .ant-layout-sider,
  .ant-layout-sider-has-trigger {
    height: 100vh !important;
    border-right: 1px solid #f0f0f0;
  }
  .ant-layout-header,
  .nav-fixed {
    border-bottom: 0.5px solid #e5e5e5;
  }
  .ant-modal-header {
    border-bottom: none;
  }
  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover {
    color: rgba(0, 0, 0, 0.85);
  }
  .signIn-loading {
    padding-right: 10px;
  }
`;
