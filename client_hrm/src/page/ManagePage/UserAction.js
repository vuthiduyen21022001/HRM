import { message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../service/user.service";
 export default function UserAction({id,OnSucces}){
    // const useParams = useParams()
    const navigate = useNavigate()

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
            <button onClick={()=>handleEdit(id)}>Edit</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    )
 }

 