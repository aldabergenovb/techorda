import { useEffect, useState } from "react";
import AntdTable from "../../Components/Table/Table";

function UnemployedPopulation() {
  const [unEmployedPop, setUnEmployedPop] = useState([]);
  const regionFilters = unEmployedPop.map((item) => ({
    text: item.regionRu,
    value: item.regionRu,
  }));

  const columns = [
    {
      title: "Область",
      dataIndex: "regionRu",
      key: "regionRu",
      filters: regionFilters,
      filterSearch: true,
      onFilter: (value, record) =>
        record.regionRu &&
        record.regionRu.toLowerCase().includes(value.toLowerCase()),
      width: "30%",
    },
    {
      title: "Год",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Единица измерения",
      dataIndex: "edizmRu",
      key: "edizmRu",
    },
    {
      title: "Индикатор",
      dataIndex: "indicator",
      key: "indicator",
      sorter: (a, b) => a.indicator - b.indicator,
    },
  ];

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let responseUrl = "http://localhost:5244/OpenData/GetUnemployedPopulation";
    fetch(responseUrl)
      .then((response) => response.json())
      .then((data) => {
        setUnEmployedPop(data);
        setFilteredData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Безработное население (в возрасте 15 лет и старше)</h1>
      <AntdTable columnsList={columns} dataList={filteredData} />
    </div>
  );
}

export default UnemployedPopulation;
