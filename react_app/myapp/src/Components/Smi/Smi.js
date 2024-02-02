import { useEffect, useState } from "react";
import Table from "../Table/Table";
import "bootstrap/dist/css/bootstrap.css";

function Smi() {
  const [smiList, setSmiList] = useState([]);
  useEffect(() => {
    let responseUrl = "http://localhost:3001";
    fetch(responseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSmiList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Table props={smiList} />
    </div>
  );
}

export default Smi;
