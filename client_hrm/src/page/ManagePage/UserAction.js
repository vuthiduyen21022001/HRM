import { message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../service/user.service";
 export default function UserAction({id,OnSucces}){
    // const useParams = useParams()
    const navigate = useNavigate()
    // const addPosts = (post) => {
    //     userService
    //        .postManager(post)
    //        .then((res) => {
    //          message.success("Thêm thành công");
    //        })
    //        .catch((err) => {
    //          message.error("Thêm không thành công");
    //        });
    //    };
const handleDelete=(id)=>{
    userService.deleteUser(id)
    .then((res)=>{
        message.success("xoa thanh cong!");
        OnSucces()
        
    }).catch((err) =>{
        message.err("xoa that bai!");

    });
};
const handleEdit=(id)=>{
    navigate(`/editUser/${id}`)

}

    return(
        <div>
            {/* <button onClick={()=>addPosts()}>Thêm</button> */}
            <button onClick={()=>handleEdit(id)}>Sửa</button>
            <button onClick={()=>handleDelete(id)}>Xóa</button>
        </div>
    )
 }

 