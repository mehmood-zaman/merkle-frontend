import { useEffect } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { LoginCard, LoginWrapper, FormWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import Logo from "Assets/Logos/LogoPrimary";
import LoadingSpinner from "Components/Shared/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "Redux/App/Actions/Auth";
import { loading as stateLoading } from "Redux/App";

const Login = () => {
  const navigate = useNavigate();
  const loading = useSelector(stateLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }
  }, [navigate]);

  const onFinish = (values) => {
    dispatch(LoginAction(values, navigate));
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <Row>
          <Col span={24}>
            <div style={{ textAlign: "center" }}>
              <Logo width={150} />
            </div>
          </Col>
        </Row>
        <FormWrapper>
          <Form
            form={form}
            layout="vertical"
            className="FormWrapper"
            onFinish={onFinish}
          >
            <Form.Item
              label="Username / Email"
              name="username"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <div style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </div>
            </Form.Item>

            <div>{loading && <LoadingSpinner />}</div>
          </Form>
        </FormWrapper>
      </LoginCard>
    </LoginWrapper>
  );
};

export default Login;
