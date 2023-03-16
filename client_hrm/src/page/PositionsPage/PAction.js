import { message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { positionsService } from "../../service/positions.service";

 export default function PAction({position,OnSucces}){
    const navigate = useNavigate()

const handleDelete=()=>{
    positionsService.deletePositions(position)
    .then((res)=>{
        message.success("xoa thanh cong!");
        OnSucces()
        
    }).catch((err) =>{
        message.err("xoa that bai!");

    });
};
const handleEdit=(id)=>{
    navigate(`/editPositions/${position}`)

}

    return(
        <div>
            {/* <button onClick={()=>addPosts()}>Thêm</button> */}
            <button onClick={handleEdit}>Sửa</button>
            <button onClick={handleDelete}>Xóa</button>
        </div>
    )
 }

 