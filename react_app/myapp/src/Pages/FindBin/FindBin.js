import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import "./FindBin.css";
import Table from "../../Components/Table/Table";

function FindBin() {
  const columns = [
    {
      title: "БИН",
      dataIndex: "bin",
      key: "bin",
    },
    {
      title: "Наименование",
      dataIndex: "nameru",
      key: "nameru",
    },
    {
      title: "Директор",
      dataIndex: "director",
      key: "director",
    },
    {
      title: "Статус",
      dataIndex: "statusru",
      key: "statusru",
    },
    {
      title: "ОКЕД",
      dataIndex: "okedru",
      key: "okedru",
    },
    {
      title: "Адрес",
      dataIndex: "addressru",
      key: "addressru",
    },
  ];
  const [binData, setBinData] = useState([]);
  const [form] = Form.useForm();

  const getInfo = (bin) => {
    let responseUrl = "http://localhost:5244/OpenData/FindBin?bin=" + bin;
    fetch(responseUrl)
      .then((response) => response.json())
      .then((data) => {
        setBinData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinish = (values) => {
    const { binValue } = values;
    if (binValue) {
      getInfo(binValue);
    }
  };

  return (
    <div>
      <h1>
        Регистрационные данные юридических лиц, филиалов, представительств
        Казахстана
      </h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="binValue"
          rules={[{ required: true, message: "Пожалуйста, введите БИН" }]}
        >
          <Input className="input" placeholder="Введите БИН" />
        </Form.Item>
        <Button className="button" htmlType="submit">
          Найти
        </Button>
      </Form>
      <Table columnsList={columns} dataList={binData} />
    </div>
  );
}

export default FindBin;
