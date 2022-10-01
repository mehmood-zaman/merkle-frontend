import axios from "axios";
import { requestStart, requestCompleted } from "../..";
import { notification } from "antd";

export function LoginAction(data, navigate) {
  return async (dispatch) => {
    dispatch(requestStart());
    try {
      axios
        .post("/api/v1/auth/sign-in", data)
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
          notification.error({
            message: error.response.data.meta.message,
          });
          console.log(error);
        });
    } catch (error) {
      dispatch(requestCompleted());
    }
  };
}
