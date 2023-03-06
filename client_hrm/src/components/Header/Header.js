import React from "react";
import {FaSearch, FaBell, FaBars, FaStar} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const StyleHeader = styled.div`
  background-color: #fff;
  width: 100%;
  height: 66px;
  border-bottom: 1px solid #e8ebed;
  .Navbar {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;
    .Logo h2 {
      color: white;
      width: 140px;
      text-align: center;
      align-items: center;
      padding: 6px 10px;
      background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
      border-radius: 8px;
    }
    .Navbar_Course {
      display: flex;
      align-items: center;
      position: relative;
      .Icon_Course {
        color: #524949;
        margin-top: 5px;
      }
      .Category_Course {
        font-size: 14px;
        margin-left: 9px;
      }
      .Course_menu {
        width: 280px;
        height: 351px;
        inset: 0px 0px auto auto;
        margin: 0px;
        transform: translate3d(147px, 48.8px, 0px);
        z-index: 9999;
        position: absolute;
        .Course_menu_category {
          border-radius: 10px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 -4px 32px rgb(0 0 0 / 20%);
          color: #1d2129;
          margin: 0;
          overflow: hidden;
          .CourseMenu_list {
            margin: 0;
            padding-left: 0;
            list-style-type: none;
            li a {
              color: #666;
              display: block;
              font-size: 14px;
              padding: 10px 0;
              text-decoration: none;
            }
          }
        }
      }
    }
    .NavSearch {
      border: 2px solid #e8e8e8;
      display: flex;
      border-radius: 20px;
      height: 40px;
      width: 420px;
      align-items: center;
      .iconSearch {
        margin-left: 17px;
        color: #524949;
      }
      .Search_input {
        border: none;
        caret-color: #444;
        outline: none;
        caret-color: #444;
        flex: 1 1;
        padding: 4px 0px;
        margin: 0 9px;
      }
    }

    .Navbar_login {
      width: 410px;
      .btn-Login a {
        background-color: #d53369;
        border-radius: 999px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        padding: 9px 24px;
        margin-left: 75px;
        &:hover {
          opacity: 0.9;
        }
      }
    }
    .Navbar_portal {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      width: 210px;
      .Navbar_myLearn {
        background-color: transparent;
        color: #333;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        margin-right: 16px;
        padding: 8px;
        border: none;
        box-shadow: none;
        display: block;
        outline: none;
        padding: 0;
      }
      .Navbar_actionBtn {
        color: #757575;
        padding: 8px;
      }
      .Navbar_avatar {
        border-radius: 50%;
        cursor: pointer;
        height: 28px;
        margin-left: 12px;
        object-fit: cover;
        width: 28px;
      }
      .User_menu {
        width: 280px;
        height: 351px;
        inset: 0px 0px auto auto;
        margin: 0px;
        transform: translate3d(-28px, 56.8px, 0px);
        z-index: 9999;
        position: absolute;
        .User_menu_portal {
          border-radius: 10px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 -4px 32px rgb(0 0 0 / 20%);
          color: #1d2129;
          margin: 0;
          overflow: hidden;
          .UserMenu_user {
            align-items: center;
            display: flex;
            .UserMenu_avatar {
              border-radius: 50%;
              height: 50px;
              margin: 10px 0;
              object-fit: cover;
              width: 50px;
            }
            .UserMenu_info {
              margin-left: 12px;
              .UserMenu_name {
                color: #292929;
                font-size: 14px;
                font-weight: 600;
              }
              .UserMenu_username {
                color: #757575;
                font-size: 14px;
                margin-top: 4px;
              }
            }
          }
          hr {
            border: none;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            margin: 8px 0;
          }
          .UserMenu_list {
            margin: 0;
            padding-left: 0;
            list-style-type: none;
            li a {
              color: #666;
              display: block;
              font-size: 14px;
              padding: 10px 0;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
`;
export default function Header() {
  const navigator = useNavigate();

  const handleRegister = () => {
    navigator("/register");
  };
  return (
    <div>
      <StyleHeader>
        <div className="Navbar">
          <div className="Logo">
            <h2>H-R-M</h2>
          </div>
          <div className="Navbar_Course">
            <div className="Icon_Course">
              <FaBars />
            </div>
            <p className="Category_Course"> Quản lý</p>
            {/* <div className="Course_menu">
              <ul className="Course_menu_category">
                <ul className="CourseMenu_list">
                  <li>
                    <a href="">Trang cá nhân</a>
                  </li>
                  <li>
                    <a href="">Viết Blog</a>
                  </li>
                  <li>
                    <a href="">Trang cá nhân</a>
                  </li>
                  <li>
                    <a href="">Viết Blog</a>
                  </li>
                  <li>
                    <a href="">Trang cá nhân</a>
                  </li>
                  <li>
                    <a href="">Viết Blog</a>
                  </li>
                  <li>
                    <a href="">Trang cá nhân</a>
                  </li>
                  <li>
                    <a href="">Viết Blog</a>
                  </li>
                </ul>
              </ul>
            </div> */}
          </div>
          <div className="NavSearch">
            <div className="iconSearch">
              <FaSearch />
            </div>
            <input
              className="Search_input"
              type="text"
              // spellcheck="false"
              placeholder="Tìm kiếm..."
            />
          </div>
          <div className="Navbar_login">
            <div className="btn-Login">
              <a>Đăng Nhập</a>
              <a onClick={handleRegister}>Đăng Ký</a>
            </div>
          </div>
          {/* <div className="Navbar_portal">
            <button className="Navbar_myLearn">Khóa học của tôi </button>
            <div className="Navbar_actionBtn">
              <FaBell />
            </div>
            <img
              className="Navbar_avatar"
              src="https://files.fullstack.edu.vn/f8-prod/user_photos/203465/6281ce86b5c0d.jpg"
              alt=""
            />
            <div className="User_menu">
              <ul className="User_menu_portal">
                <div className="UserMenu_user">
                  <img
                    className="UserMenu_avatar"
                    src="https://files.fullstack.edu.vn/f8-prod/user_photos/203465/6281ce86b5c0d.jpg"
                    alt=""
                  />
                  <div className="UserMenu_info">
                    <div className="UserMenu_name">Dieu Plot</div>
                    <div className="UserMenu_username">dieuplot@gmail.com</div>
                  </div>
                </div>
                <hr />
                <ul className="UserMenu_list">
                  <li>
                    <a href="">Trang cá nhân</a>
                  </li>
                </ul>
                <hr />
                <ul className="UserMenu_list">
                  <li>
                    <a href="">Viết Blog</a>
                  </li>
                  <li>
                    <a href="">Bái viết của tôi</a>
                  </li>
                </ul>
                <hr />
                <ul className="UserMenu_list">
                  <li>
                    <a href="">Bài viết đã lưu</a>
                  </li>
                </ul>
                <hr />
                <ul className="UserMenu_list">
                  <li>
                    <a href="">Cài đặt</a>
                  </li>
                  <li>
                    <a href="">Đăng xuất</a>
                  </li>
                </ul>
              </ul>
            </div>
          </div> */}
        </div>
      </StyleHeader>
    </div>
  );
}
