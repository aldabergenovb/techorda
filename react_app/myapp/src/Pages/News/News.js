import { useEffect, useState } from "react";
import NewsList from "../../Components/NewsList/NewsList";

function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    let responseUrl = "http://localhost:5244/OpenData/GovNews";
    fetch(responseUrl)
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data.channel.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Новости</h1>
      <NewsList news={newsData} />
    </div>
  );
}
export default News;
