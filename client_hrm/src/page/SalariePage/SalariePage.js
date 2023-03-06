import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListSalary } from "../../redux/salariSlice";
import { userService } from "../../service/user.service";
import User from "./User";

const columns = [
  {
    title: "salary",
    dataIndex: "salary",
    key: "salary",

  },
  {
    title: "bonus",
    dataIndex: "bonus",
    key: "bonus",
  },
  {
    title: "allowance",
    dataIndex: "allowance",
    key: "allowance",
  },
  {
    title: "tax",
    dataIndex: "tax",
    key: "tax",
  },
  {
    title: "total_salary",
    dataIndex: "total_salary",
    key: "total_salary",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
export default function SalariePage() {
  // return <div>SalariePage</div>;
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.salariSlice.salarilist;
  });
  console.log(123, data)
  useEffect(() => {
    let fetchListSalary = () => {
      userService
        .getSalaryList()
        .then(function (res) {
          console.log("data salari",res.data)

          let salariList = res.data.map((sa) => {
            return {
              ...sa,
              action:
                (
                  <User OnSucces={fetchListSalary} id={sa
                    
                    
                    ._id}></User>
                )
            }
          })
          dispatch(getListSalary(salariList));
        })
        .catch(function (err) {
          console.log(err);
        });
    }; 
    fetchListSalary();
  }, []);
  
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
