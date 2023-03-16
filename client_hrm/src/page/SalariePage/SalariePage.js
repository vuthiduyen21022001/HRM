import { Button, message, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getListSalary } from "../../redux/salariSlice";
import { salaryService } from "../../service/salary.service";


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
    render: (text, record) => (
      <span>{record.salary + record.bonus + record.allowance - record.tax}</span>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
export default function SalariePage() {
  // return <div>SalariePage</div>;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.salariSlice.salarilist;
  });
  console.log(123, data)
  useEffect(() => {
    let fetchListSalary = () => {
      salaryService
        .getSalaryList()
        .then(function (res) {
          console.log("data salari",res.data)

          let salariList = res.data.map((sala) => {
            return {
              ...sala,
              action:
                (
                  <Action OnSucces={fetchListSalary} salary={sala._id}></Action>
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

const handleCreate =()=>{
   navigate("/salaries/createsalary")
  
}

  return (
    <div>
      <Button onClick={handleCreate} type="primary" block style={{width: "90px"}}>Thêm</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );

}
const Action = ({ salary,OnSucces }) => {
  console.log("action",salary)
  const navigate = useNavigate();

  const handleEditUser = () => {
    navigate(`/editSalari/${salary}`);
  };
  const handleDelete = () => {
    salaryService.deleteSalary(salary)
    .then((res)=>{
        message.success("xoa thanh cong!");
        OnSucces()
        
    }).catch((err) =>{
        message.err("xoa that bai!");

    });
  };
  return (
    <div className="space-x-5">
      <button
        className="bg-blue-500 rounded text-white px-5 py-3"
        onClick={handleEditUser}
      >
         Sửa
       </button>
      <button
        className="bg-red-500 rounded text-white px-5 py-3"
      onClick={handleDelete}
      >
        Xóa
      </button>
    </div>
  );
};