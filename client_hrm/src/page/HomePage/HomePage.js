import React, {useEffect} from "react";
import styled from "styled-components";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import Header from "../../components/Header/Header";

const Footer = styled.div`
  background: black;
  height: auto;
  color: white;
  .footer_container {
    max-width: 1100px;
    height: auto;
    .footer_content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .footer_item {
        /* margin: auto; */
      }
    }
  }
`;
export default function HomePages() {
  // useEffect(() => {
  //   courseService
  //     .getListCourse()
  //     .then((res) => {
  //       console.log(321, res);
  //       //  setMovie(res?.data?.content);
  //     })
  //     .catch((err) => {
  //       console.log("error:", err);
  //     });
  // });
  return (
    <div>
      <Header />
      <SimpleSlider />
      <Footer>
        <div className="footer_container">
          <div className="footer_content">
            <div className="footer_item">1</div>
            <div className="footer_item">2</div>
            <div className="footer_item">3</div>
            <div className="footer_item">4</div>
            <div className="footer_item">5</div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
