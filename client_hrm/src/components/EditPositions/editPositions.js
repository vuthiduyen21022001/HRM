import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import styled from "styled-components";
import PositionsPage from "../../page/PositionsPage/PositionsPage";
import { positionsService } from "../../service/positions.service";
const Form = styled.form`
display: flex;
flex-direction: column;
width: 300px;
`;
const Label = styled.label`
padding: 8px;
font-size: 16px;
`;
const Input = styled.input`
margin-bottom: 10px;
padding: 8px;
font-size: 16px;
border: 1px solid #ccc;
`;

const Button = styled.button`
padding: 8px 16px;
font-size: 16px;
background: #007bff;
color: #fff;
border: none;
cursor: pointer;

&:hover {
    background: #0069d9;
}
`;
export default function EditPositions() {
    const { id } = useParams()
    const navigate = useNavigate();  
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")     
    const [salary, setSalari] = useState("");
   
   
    console.log("321",PositionsPage)
    
    // const handleChange = (event) => {
    //     setSalari({ ...salary, [event.target.salary]: event.target.value });
    // };
const updatePositions = async (pos) =>{
    try {
        const res = await positionsService.updatePositions(id,pos);
        console.log("data salary",res.data)
        message.success(" Đăng nhập thành công");

    } catch (error) {
        message.error("Đăng nhập không thành công");
    }
}

const handleSubmit=(event)=>{
    event.preventDefault();
    const update = {
        name: name,
        description:description,
        salary: salary,
 
     
    };
    updatePositions(update);
};
    return (
        <Form 
        onSubmit={handleSubmit}
        >
             <Label>Tên</Label>
        <Input
        type="text"
        placeholder=""
        value={name}
        onChange={(event) => setName(event.target.value)}
        />
        <Label> Mô tả</Label>
        <Input
        type="text"
        placeholder=""
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        />
        <Label>Lương </Label>
        <Input
        type="number"
        placeholder=""
        value={salary}
        onChange={(event) => setSalari(event.target.value)}
        />
       
        
       
        <Button type="submit">Lưu</Button>
    </Form>
    )
}