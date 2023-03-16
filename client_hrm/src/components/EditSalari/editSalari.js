    import { message } from "antd";
    import React, { useEffect, useState } from "react";
    import { useParams , useNavigate } from "react-router-dom";
    import styled from "styled-components";
    import { salaryService } from "../../service/salary.service";
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
    export default function EditSalari() {
        const { id } = useParams()
        const navigate = useNavigate();       
        const [salary, setSalari] = useState("");
        const [bonus,setBonus] = useState("")
        const [allowance,setAllowance] = useState("")
        const [tax,setTax] = useState("")
        const [total_salary,setTotal_salary] = useState("")
        const [post, setpost] = useState([]);
        // console.log("321",user)
        
        // const handleChange = (event) => {
        //     setSalari({ ...salary, [event.target.salary]: event.target.value });
        // };
    const updateSalari = async (salari) =>{
        try {
            const res = await salaryService.updateSalari(id,salari);
            console.log("data salary",res.data)
            message.success(" Đăng nhập thành công");

        } catch (error) {
            message.error("Đăng nhập không thành công");
        }
    }
    // const updateSalari = (salari) => {
    //     userService
    //        .salariRegister(salari)
    //        .then((res) => {
    //          message.success("Thêm thành công");
    //        })
    //        .catch((err) => {
    //          message.error("Thêm không thành công");
    //        });
    //    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        const update = {
            salary: salary,
            bonus: bonus,
            allowance:allowance,
            tax:tax,
            total_salary:total_salary,
        };
        updateSalari(update);
    };
        return (
            <Form 
            onSubmit={handleSubmit}
            >
            <Label>Lương </Label>
            <Input
            type="number"
            placeholder=""
            value={salary}
            onChange={(event) => setSalari(event.target.value)}
            />
            <Label>Thưởng</Label>
            <Input
            type="text"
            placeholder=""
            value={bonus}
            onChange={(event) => setBonus(event.target.value)}
            />
            <Label>Phụ Cấp</Label>
            <Input
            type="number"
            placeholder=""
            value={allowance}
            onChange={(event) => setAllowance(event.target.value)}
            />
            <Label>Thuế</Label>
            <Input
            type="number"
            placeholder=""
            value={tax}
            onChange={(event) => setTax(event.target.value)}
            />
            <Label>Tổng Lương</Label>
            <Input
            type="number"
            placeholder=""
            value={total_salary}
            onChange={(event) => setTotal_salary(event.target.value)}
            />
            <Button type="submit">Lưu</Button>
        </Form>
        )
    }