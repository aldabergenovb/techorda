import { convert } from "html-to-text";
import "./NewsCard.css";
import { Button, Card } from "antd";
import { Link, useParams } from "react-router-dom";

function NewsCard({ title, description, pubDate, imageUrl }) {
  const { id } = useParams();
  const text = convert(description);
  return (
    <div>
      <Card title={title} content={text}>
        {imageUrl && <img className="test" src={imageUrl} alt={title} />}
        <p>{text}</p>
        <p>Опубликовано: {new Date(pubDate).toLocaleString()}</p>
        <Link
          to={`/news/${id}`}
          state={{
            title: title,
            description: description,
            pubDate: pubDate,
            imageUrl: imageUrl,
          }}
        >
          <Button type="primary" size="small">
            Подробнее
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default NewsCard;
