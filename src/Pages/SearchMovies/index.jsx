import React from "react";
import { Card, Col, Row } from "antd";
import { data as stateData, loading as stateLoading } from "Redux/App";
import { useSelector } from "react-redux";
import LoadingSpinner from "Components/Shared/LoadingSpinner";
import { SearchMovieWrapper } from "./styles";

const MoviesSearch = () => {
  const data = useSelector(stateData);
  const loading = useSelector(stateLoading);
  if (loading) {
    return <LoadingSpinner />;
  } else if (data.length > 0 && !data[0]?.Error) {
    return data?.map((item) => (
      <SearchMovieWrapper>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={6}>
              <Card
                title={item?.Title}
                bordered={false}
                cover={<img alt="movie-poster" src={item?.Poster} />}
              >
                <div>
                  <div className="movie-details">
                    <b>Year:</b>
                    <p>{item?.Year}</p>
                  </div>
                  <div className="movie-details">
                    <b>Released:</b>
                    <p>{item?.Released}</p>
                  </div>
                  <div className="movie-details">
                    <b>Language:</b>
                    <p>{item?.Language}</p>
                  </div>
                  <div className="movie-details">
                    <b>Director:</b>
                    <p>{item?.Director}</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </SearchMovieWrapper>
    ));
  } else if (data[0]?.Error === "Movie not found!") {
    return <div>Movie not found!</div>;
  } else {
    return <div>Try to seach for movie!</div>;
  }
};

export default MoviesSearch;
