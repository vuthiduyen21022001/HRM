import { message } from "antd";
import styled from "styled-components";

import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { userService } from "../../service/user.service";
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
export default function EditUser() {
    const { id } = useParams()
    const navigate = useNavigate();       
    // const [user, setUser] = useState({
    //     name: "",
    //     age: "",
    //     position: "",
    //     username: "",
    //     password: "",
    //     department: "",
    // });
    const [name, setName] = useState("");
    const [age,setAge] = useState("")
    const [position,setPosition] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [department,setDepartment] = useState("")
    const [post, setpost] = useState([]);


    // console.log("321",user)
    
    // const handleChange = (event) => {
    //     setUser({ ...user, [event.target.name]: event.target.value });
    // };
    const updateUser = async (use) =>{
        try {
            const res = await userService.updateUser(id,use);
            console.log("data use",res.data)
            message.success(" Đăng nhập thành công");

        } catch (error) {
            message.error("Đăng nhập không thành công");
        }
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const update = {
            name: name,
            age: age,
            position:position,
            username:username,
            password:password,
            department:department,
        };
        updateUser(update);
    }
    return (
        <Form 
        onSubmit={handleSubmit}
        >
        <Label>Họ tên </Label>
        <Input
        type="text"
        placeholder=""
        value={name}
        onChange={(event) => setName(event.target.value)}
        />
        <Label>Tuổi</Label>
        <Input
        type="number"
        placeholder=""
        value={age}
        onChange={(event) => setAge(event.target.value)}
        />
        <Label>Chức vụ</Label>
        <Input
        type="text"
        placeholder=""
        value={position}
        onChange={(event) => setPosition(event.target.value)}
        />
        <Label>Tên đăng nhập</Label>
        <Input
        type="text"
        placeholder=""
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        />
        <Label>Mật khẩu</Label>
        <Input
        type="text"
        placeholder=""
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
         <Label>Phòng ban</Label>
        <Input
        type="text"
        placeholder=""
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
        />
        <Button type="submit">Lưu</Button>
    </Form>
    )
}
