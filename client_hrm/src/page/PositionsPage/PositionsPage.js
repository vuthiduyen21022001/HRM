import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table, Tag } from "antd";
import { positionsService } from "../../service/positions.service";
import PAction from "./PAction";
import { getListPositions } from "../../redux/positionsSlice";
import { Navigate } from "react-router-dom";


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
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
  },

  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
export default function PositionsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.positionsSlice.positionList;
  });
  console.log(1234, data)
  useEffect(() => {
    let fetchListPositions = () => {
      positionsService.getPositionsList()
        .then(function (res) {
          console.log(123, res.data)


          let positionList = res.data.map((pos) => {
            return {
              ...pos,
              action:
                (
                  <PAction OnSucces={fetchListPositions} position={pos._id}></PAction>
                )
            }
          })
          dispatch(getListPositions(positionList));
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    fetchListPositions();
  }, []);

  const handleCreate = () => {
    navigate("/positions/createposition")

  }
  return (
    <div>
      <Button onClick={handleCreate} type="primary" block style={{ width: "90px" }}>Thêm</Button>

      <Table columns={columns} dataSource={data} />

      {/* <h1>Ok</h1> */}
    </div>
  );
}

// const UserAction = ({department}) => {
//   const navigate = useNavigate();

//   const handleEditUser = () => {
//     navigate(`/editUser/${department}`);
//   };
//   return (
//     <div className="space-x-5">
//       <button
//         className="bg-blue-500 rounded text-white px-5 py-3"
//         onClick={handleEditUser}
//       >
//         Sửa
//       </button>
//       <button
//         className="bg-red-500 rounded text-white px-5 py-3"
//         // onClick={handleUserDelete}
//       >
//         Xóa
//       </button>
//     </div>
//   );
// };