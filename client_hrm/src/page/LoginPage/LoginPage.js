import React from "react";
import { userService } from "../../service/user.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { message } from "antd";
import "./login.css";

export default function LoginPage() {
  const history = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const addPosts = (value) => {
    userService
      .loginUser(value)
      .then((res) => {
        message.success(" Đăng nhập thành công");
        setTimeout(() => { history("/"); }, 1000)
      })
      .catch((err) => {
        message.error("Đăng nhập không thành công");

      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    addPosts(newUser);
  };

  return (
    <div className="main">
      <div className="center">
        <h1>Đăng nhập</h1>
        <form method="post" onSubmit={handleLogin}>
          <div class="txt_field">

            <input
              onChange={(e) => setusername(e.target.value)}
              type="text"
              required />
            <span></span>
            <label>Tên đăng nhập</label>
          </div>
          <div class="txt_field">
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              required />
            <span></span>
            <label>Mật khẩu</label>
          </div>
          <div class="pass">Quên mật khẩu?</div>
          <button type="submit" className="btn" defaultValue="Đăng nhập">
            Đăng nhập
          </button>
          <div class="signup_link">
            Không phải là thành viên? <a href="./register">Đăng ký</a>
          </div>
        </form>
      </div>
    </div>
  );
}
