import React, {useEffect, useState} from "react";
import axios from "axios";
import {Space, Table, Tag} from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "username",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export default function Home() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   axios
  //     .get("/api/employee/listEmployee")
  //     .then(function (response) {
  //       setData(response.data);
  //       // handle success
  //     })
  //     .catch(function (error) {
  //       // handle error
  //     });
  // });
  return (
    <div>
      <Table columns={columns} dataSource={data} />
      {/* <Table /> */}
    </div>
  );
}
