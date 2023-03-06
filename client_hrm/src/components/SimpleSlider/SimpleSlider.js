import React, {Component} from "react";
import Slider from "react-slick";
import styled from "styled-components";
const data = [
  {
    maBanner: 1,
    maPhim: 1282,
    hinhAnh:
      "https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-04/acac3f70-35e3-11eb-bcbe-7daa1ab28fd4.jpg",
  },
  {
    maBanner: 2,
    maPhim: 1283,
    hinhAnh:
      "https://gedc-goa.org/sites/default/files/2020-08/WebsitedesignGEDC.jpg",
  },
  {
    maBanner: 3,
    maPhim: 1284,
    hinhAnh: "https://www.lessi.ca/images/slider/slider-6.jpg",
  },
];
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    const SimpleSlider = styled.div`
      border-radius: 16px;
      height: 270px;
      overflow: hidden;
      margin: 0 25px;
      .sliderplot {
        /* background-color: red; */
        height: 250px;
      }
    `;
    return (
      <SimpleSlider>
        <Slider className="sliderplot" {...settings}>
          {data.map((item, index) => (
            <img key={index} src={item.hinhAnh} alt="" />
          ))}
          {/* <img
            src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-04/acac3f70-35e3-11eb-bcbe-7daa1ab28fd4.jpg"
            alt=""
          />
          <img
            src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-04/acac3f70-35e3-11eb-bcbe-7daa1ab28fd4.jpg"
            alt=""
          />
          <img
            src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-04/acac3f70-35e3-11eb-bcbe-7daa1ab28fd4.jpg"
            alt=""
          />
          <img
            src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-04/acac3f70-35e3-11eb-bcbe-7daa1ab28fd4.jpg"
            alt=""
          /> */}
        </Slider>
      </SimpleSlider>
    );
  }
}
