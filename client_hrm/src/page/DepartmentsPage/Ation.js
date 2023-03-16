import { message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { departmentService } from "../../service/department.service";
 export default function Ation({department,OnSucces}){
    const navigate = useNavigate()
const handleDelete=()=>{
    departmentService.deleteDepartments(department)
    .then((res)=>{
        message.success("xoa thanh cong!");
        OnSucces()
        
    }).catch((err) =>{
        message.err("xoa that bai!");

    });
};
const handleEdit=(id)=>{
    navigate(`/editDepartments/${department}`)

}

    return(
        <div>
            {/* <button onClick={()=>addPosts()}>Thêm</button> */}
            <button onClick={handleEdit}>Sửa</button>
            <button onClick={handleDelete}>Xóa</button>
        </div>
    )
 }

 