import axios from "axios";
import { requestStart, requestCompleted, requestSuccess } from "../..";
import { notification } from "antd";

export function SearchMovies(data) {
  return async (dispatch) => {
    dispatch(requestStart());
    let token = localStorage.getItem("token");
    try {
      if (data)
        axios
          .post("/api/v1/movies/search-movies", data, {
            headers: {
              "x-auth-token": token,
            },
          })
          .then((res) => {
            if (res) {
              console.log(res);
              dispatch(requestSuccess([res.data.data.results]));
            }
          })
          .catch((error) => {
            notification.error({
              message: error.response.data.message,
            });
            dispatch(requestCompleted());
          });
    } catch (error) {
      dispatch(requestCompleted());
    }
  };
}
