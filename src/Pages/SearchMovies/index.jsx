import React from "react";
import { Card, Col, Row } from "antd";
import { data as stateData, loading as stateLoading } from "Redux/App";
import { useSelector } from "react-redux";
import LoadingSpinner from "Components/Shared/LoadingSpinner";

const MoviesSearch = () => {
  const data = useSelector(stateData);
  const loading = useSelector(stateLoading);
  if (loading) {
    return <LoadingSpinner />;
  } else if (data.length > 0 && !data[0]?.Error) {
    return data?.map((item) => (
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={6}>
            <Card
              title={item?.Title}
              bordered={false}
              cover={<img alt="movie-poster" src={item?.Poster} />}
            >
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    ));
  } else if (data[0]?.Error === "Movie not found!") {
    return <div>Movie not found!</div>;
  } else {
    return <div>Try to seach for movie!</div>;
  }
};

export default MoviesSearch;
