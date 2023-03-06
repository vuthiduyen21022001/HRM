import React from "react";
import styled from "styled-components";
import {FaStar} from "react-icons/fa";

const ScrollList = styled.div`
  .Card {
    /* width: 25%; */
    height: auto;
    /* background: blue; */
    margin: 6px 12px;
    .CommonItem_wrapper {
      width: 100%;
      height: 100%;
      img {
        background-color: rgba(0, 0, 0, 0.1);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 16px;
        display: block;
        object-fit: cover;
        position: relative;
        width: 100%;
        cursor: pointer;
      }
      .iconStar {
        color: #f8e922;
        display: flex;
        justify-items: center;
        span {
          color: black;
          margin-left: 8px;
        }
      }
    }
  }
`;

export default function Card() {
  return (
    <ScrollList>
      <div className="Card">
        <div className="CommonItem_wrapper">
          <img
            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
            alt=""
          />
          <h3 className="CommonItem_title">Kiến Thức Nhập Môn IT</h3>
          <div className="iconStar">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>10</span>
          </div>
        </div>
      </div>

      {/* <div className="index-module_row">
        <div className="index-module_col">
          <div className="CourseItem">
          </div>
        </div>
      </div> */}
    </ScrollList>
  );
}
