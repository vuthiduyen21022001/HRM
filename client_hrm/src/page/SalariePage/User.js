import { message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { userService } from "../../service/user.service";
 export default function UserAction({id,OnSucces}){
    // const useParams = useParams()
    const navigatee = useNavigate()

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
    navigatee(`/editUser/${id}`)

}
const Action = styled.div`
margin:auto
.btn_edit{
    background: #1e2bc7;
    padding: 4px 22px;
    color: white;
    margin-right: 14px;
    border-radius: 5px;
}
`
    return(
        <Action>
            <button  className="btn_edit" onClick={()=>handleEdit(id)}>Edit</button>
            <button className="btn_delete" onClick={()=>handleDelete(id)}>Delete</button>
        </Action>
    )
 }

 