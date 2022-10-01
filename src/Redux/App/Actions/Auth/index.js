import axios from "axios";
import { requestStart, requestCompleted } from "../..";
import { notification } from "antd";

export function LoginAction(data, navigate) {
  return async (dispatch) => {
    dispatch(requestStart());
    try {
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/sign-in`, data)
        .then((res) => {
          if (res) {
            console.log(res);
            localStorage.setItem("token", res.data.data.token);
            navigate("/");
            dispatch(requestCompleted());
            notification.success({
              message: "Login successfully",
            });
          }
        })
        .catch((error) => {
          dispatch(requestCompleted());
          notification.error({
            message: error?.response?.data?.message,
          });
          console.log(error?.response?.data?.message);
        });
    } catch (error) {
      dispatch(requestCompleted());
    }
  };
}
