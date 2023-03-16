import React from "react";
import styled from "styled-components";

const Footer = styled.div`
background-color: #ADAAAB;
justify-content: space-between;
align-items: center; 
display:flex;
height:50px;
.footerleft{
  margin-left: 238px;

}
.footerright{
  margin-right: 5px;

}
`



export default function FooterTheme() {
  return <Footer>
    <div className="footerleft">
      <span>Bản quyền © Trang web của bạn 2023</span>
    </div>
    <div  className="footerright">
      <a class="dropdown-item" href="#!">Chính sách bảo mật</a>
      <span>.</span>
      <a class="dropdown-item" href="#!"> Điều khoản & Điều kiện</a>
    </div>
  </Footer>;

 
}
