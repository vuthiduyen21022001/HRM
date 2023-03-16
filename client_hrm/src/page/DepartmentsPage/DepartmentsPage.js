import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { departmentService } from "../../service/department.service";
import { getListDepartments } from "../../redux/departmentsSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table, Tag } from "antd";
import Ation from "./Ation";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },

  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
export default function DepartmentsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.departmentsSlice.departmentList;
  });
  console.log(1234, data)
  useEffect(() => {
    let fetchListDepartments = () => {
      departmentService.getDepartmentsList()
        .then(function (res) {
          console.log(123, res.data)


          let departmentList = res.data.map((s) => {
            return {
              ...s,
              action:
                (
                  <Ation OnSucces={fetchListDepartments} department={s._id}></Ation>
                )
            }
          })
          dispatch(getListDepartments(departmentList));
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    fetchListDepartments();
  }, []);
  const handleCreate = () => {
    navigate("/department/createdepartment")

  }
  return (
    <div>
      <Button onClick={handleCreate} type="primary" block style={{ width: "90px" }}>Thêm</Button>

      <Table columns={columns} dataSource={data} />

      {/* <h1>Ok</h1> */}
    </div>
  );
}
