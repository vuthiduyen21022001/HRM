import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { Button, Space, Table, Tag } from "antd";
import { userService } from "../../service/user.service";
// import {userService} from "../../services/user.service";
import { getListUser } from "../../redux/userSlice";
import UserAction from "./UserAction";

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
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
export default function ManagePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.userSlice.userList;
  });
  console.log(123, data)
  useEffect(() => {
    let fetchListUser = () => {
      userService
        .getUserList()
        .then(function (res) {

          let userList = res.data.map((user) => {
            return {
              ...user,
              action:
                (
                  <UserAction OnSucces={fetchListUser} id={user._id}></UserAction>
                )
            }
          })
          dispatch(getListUser(userList));
        })
        .catch(function (err) {
          console.log(err);
        });
    }; 
    fetchListUser();
  }, []);
  
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
