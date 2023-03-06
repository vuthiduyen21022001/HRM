import React from "react";

import "./login.css";

export default function LoginPage() {
  // const [username, setusername] = useState("");
  // const [password, setpassword] = useState("");
  // const [post, setpost] = useState([]);
  // const addPosts = (post) => {
  //   userService
  //      .postLogin(post)
  //      .then((res) => {
  //        message.success("Thêm thành công");
  //      })
  //      .catch((err) => {
  //        message.error("Thêm không thành công");
  //      });
  //  };
  //  const handleRegister = (e) => {
  //   e.preventDefault();
  //   const newUser = {
  //     username: username,
  //     password: password,
  //   };
  //   addPosts(newUser);
  // };

  return (
    <div className="main">
      <div className="center">
        <h1>Đăng nhập</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Tên đăng nhập</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
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
