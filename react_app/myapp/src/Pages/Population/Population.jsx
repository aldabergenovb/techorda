import { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";

function Population() {
  const [populationData, setPopulationData] = useState([]);
  const regionFilters = populationData.map((item) => ({
    text: item.region,
    value: item.region,
  }));
  const columns = [
    {
      title: "Область",
      dataIndex: "region",
      key: "region",
      filters: regionFilters,
      filterSearch: true,
      onFilter: (value, record) =>
        record.region &&
        record.region.toLowerCase().includes(value.toLowerCase()),
      width: "30%",
    },
    {
      title: "Всего",
      dataIndex: "total",
      key: "total",
      sorter: (a, b) => a.total - b.total,
    },
    {
      title: "Город",
      dataIndex: "urban",
      key: "urban",
      sorter: (a, b) => a.urban - b.urban,
    },
    {
      title: "Село",
      dataIndex: "rural",
      key: "rural",
      sorter: (a, b) => a.rural - b.rural,
    },
  ];

  useEffect(() => {
    let responseUrl = "http://localhost:5244/OpenData/GetPopulation";
    fetch(responseUrl)
      .then((response) => response.json())
      .then((data) => {
        setPopulationData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Численность населения на начало периода</h1>
      <Table columnsList={columns} dataList={populationData} />
    </div>
  );
}

export default Population;
