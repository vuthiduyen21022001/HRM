import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { userService } from "../../service/user.service";

export default function EditUser() {
    const { id } = useParams()
    const navigate = useNavigate();       
    const [user, setUser] = useState({
        name: "",
        age: "",
        position: "",
        username: "",
        password: "",
        department: "",
    });

    // console.log("321",user)
    
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };
    return (
        <div className="mainss">
            <div className="centere">
                <h1>Update</h1>
                <form
                    // onSubmit={handleSubmit}
                >
                    <div className="txt_field">
                        <input
                            // onChange={handleChange}
                            // value={user.name}
                            // onChange={(event) => setname(event.target.value)}
                            type="text"
                            required
                        />
                        <span />
                        <label>Họ và tên</label>
                    </div>
                    <div className="txt_field">
                        <input
                            // onChange={handleChange}
                            // value={user.age}

                            type="text"
                            required
                        />
                        <span />
                        <label>Tuổi</label>
                    </div>
                    <div className="txt_field">
                        <input
                            // onChange={handleChange}
                            // value={user.position}

                            type="text"
                            required
                        />
                        <span />
                        <label>Chức vụ</label>
                    </div>
                    <div className="txt_field">
                        <input
                            // onChange={handleChange}
                            // value={user.username}

                            type="text"
                            required
                        />
                        <span />
                        <label>Tên đăng nhập</label>
                    </div>
                    <div className="txt_field">
                        <input
                            // onChange={handleChange}
                            // value={user.password}

                            type="password"
                            required
                        />
                        <span />
                        <label>Mật khẩu</label>
                    </div>
                    <div className="txt_field">
                        <input
                        
                            type="text"
                            required
                        />
                        <span />
                        <label>Phòng ban</label>
                    </div>
                    <button type="submit" className="btn" defaultValue="Đăng ký">
                        Update
                    </button>

                </form>
            </div>
        </div>
    )
}