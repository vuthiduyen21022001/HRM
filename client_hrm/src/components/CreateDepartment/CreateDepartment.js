import { message } from "antd";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { departmentService } from "../../service/department.service";

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
export default function CreateDepartment() {
    const { id } = useParams()
    const history = useNavigate();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")


    const [post, setpost] = useState([]);

    const addPosts = (post) => {
        departmentService.createdepartment(post)
            .then((res) => {
                message.success("Thêm thành công");
                setTimeout(() => {
                    history("/department")
                }, 1000)
            })
            .catch((err) => {
                message.error("Thêm không thành công");
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const createdepartment = {
            name: name,
            description: description,

        };
        addPosts(createdepartment);
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


            { }
            <Button type="submit">Lưu</Button>
        </Form>
    )
}
