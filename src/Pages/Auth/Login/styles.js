import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  background: #f2f8ff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-spin-dot-item {
    background-color: #d91e49 !important;
  }
`;
export const LoginCard = styled.div`
  flex-basis: 700px;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

export const LoginHeading = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 50px;
`;
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  .ant-form {
    width: 50%;
  }
  .ant-input {
    box-sizing: border-box;
    border-radius: 4px;
    height: 44px;
    background: none;
  }
  .register_link {
    padding: 20px 0px;
  }

  .ant-btn {
    border-radius: 2px;
    margin-top: 20px;
    width: 128px;
    border: none;
    height: 43px;
    color: black;
  }
  [ant-click-animating-without-extra-node="true"]:after {
    content: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  .ant-input-affix-wrapper > input.ant-input {
    height: 33px;
  }
  .ant-input-affix-wrapper {
    height: 44px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    .ant-form {
      width: 100%;
    }
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-spin-dot-item {
    background-color: #ffc704 !important;
  }
`;
