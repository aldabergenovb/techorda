import NewsCard from "../NewsCard/NewsCard";
import { Col, Row } from "antd";

function NewsList({ news }) {
  if (!news) {
    console.error("NewsList received undefined or null news prop");
    return null;
  }

  return (
    <div>
      <Row>
        {news.map((item, index) => {
          return (
            <Col key={index}>
              <NewsCard {...item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default NewsList;
