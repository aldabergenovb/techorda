import { Table } from "antd";
import "./Table.css";

function AntdTable({ columnsList, dataList }) {
  const dataListWithKeys = dataList.map((item, index) => ({
    ...item,
    key: index,
  }));

  return (
    <div>
      <Table
        className="table"
        columns={columnsList}
        dataSource={dataListWithKeys}
      />
    </div>
  );
}

export default AntdTable;
