import { useContext, useEffect, useState } from "react";
import NewsList from "../../Components/NewsList/NewsList";
import "./News.css";
import { Spin } from "antd";
import { LanguageContext } from "../../LanguageContext";

function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const lang = useContext(LanguageContext);

  useEffect(() => {
    let responseUrl = `http://localhost:5244/OpenData/GovNews?lang=${lang}`;
    fetch(responseUrl)
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data.channel.items);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [lang]);

  if (loading) {
    return (
      <div className="sweet-loading">
        <Spin size={"large"} />
      </div>
    );
  }

  return (
    <div>
      <h1>{lang === "ru" ? "Новости" : "Жаңалықтар"}</h1>
      <NewsList news={newsData} />
    </div>
  );
}
export default News;
