import React, {useEffect, useState} from "react";
import {Button, Form, Input, message} from "antd";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import "./register.css";
import { userService } from "../../service/user.service";

export default function RegisterPage() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [position, setposition] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [post, setpost] = useState([]);

  const [department, setdepartment] = useState("");

  const addPosts = (post) => {
   userService
      .postRegister(post)
      .then((res) => {
        message.success("Thêm thành công");
      })
      .catch((err) => {
        message.error("Thêm không thành công");
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      age: age,
      position: position,
      username: username,
      password: password,
      department: department,
    };
    addPosts(newUser);
  };

  return (
    <div className="main">
      <div className="center">
        <h1>Đăng ký</h1>
        <form onSubmit={handleRegister}>
          <div className="txt_field">
            <input
              onChange={(e) => setname(e.target.value)}
              type="text"
              required
            />
            <span />
            <label>Họ và tên</label>
          </div>
          <div className="txt_field">
            <input
              onChange={(e) => setage(e.target.value)}
              type="text"
              required
            />
            <span />
            <label>Tuổi</label>
          </div>
          <div className="txt_field">
            <input
              onChange={(e) => setposition(e.target.value)}
              type="text"
              required
            />
            <span />
            <label>Chức vụ</label>
          </div>
          <div className="txt_field">
            <input
              onChange={(e) => setusername(e.target.value)}
              type="text"
              required
            />
            <span />
            <label>Tên đăng nhập</label>
          </div>
          <div className="txt_field">
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              required
            />
            <span />
            <label>Mật khâu</label>
          </div>
          <div className="txt_field">
            <input
              onChange={(e) => setdepartment(e.target.value)}
              type="text"
              required
            />
            <span />
            <label>Phòng ban</label>
          </div>
          <button type="submit" className="btn" defaultValue="Đăng ký">
            Đăng ký
          </button>
          <div className="signup_link">
            Nếu bạn đã có tài khoản?<a href="./login">Đăng nhập</a>
          </div>
        </form>
      </div>
    </div>
  );
}
