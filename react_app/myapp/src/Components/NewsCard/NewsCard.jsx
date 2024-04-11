import { convert } from "html-to-text";
import "./NewsCard.css";
import { Button, Card } from "antd";
import { Link, useParams } from "react-router-dom";
import { LanguageContext } from "../../LanguageContext";
import { useContext } from "react";

function NewsCard({ title, description, pubDate, imageUrl }) {
  const lang = useContext(LanguageContext);
  const { id } = useParams();
  const text = convert(description);
  return (
    <div>
      <Card title={title} content={text}>
        {imageUrl && <img className="test" src={imageUrl} alt={title} />}
        <p>{text}</p>
        <p>
          {lang === "ru" ? "Опубликовано" : "Жарияланды"}:
          {new Date(pubDate).toLocaleString()}
        </p>
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
            {lang === "ru" ? "Подробнее" : "Толығырақ"}
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default NewsCard;
