import { Col, Row } from "antd";
import { convert } from "html-to-text";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function DetailNews() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const text = convert(state.description);

  useEffect(() => {
    if (!state) {
      navigate("/news");
      return;
    }
  }, [state, navigate]);

  return (
    <div>
      <Row>
        <Col>
          <p>Опубликовано: {new Date(state.pubDate).toLocaleString()}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>{state.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {state.imageUrl && (
            <img className="test" src={state.imageUrl} alt={state.title} />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{text}</p>
        </Col>
      </Row>
    </div>
  );
}
