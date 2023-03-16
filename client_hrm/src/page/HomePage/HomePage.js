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
            <div className="footer_item">
              {/* <footer> */}
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="ts-company-info ">
                            <h3 class="title">Về chúng tôi</h3>
                            <p>VNSOLUTION là một doanh nghiệp với một đội ngũ chuyên gia nhiệt tình, tâm huyết với công việc và có trình độ chuyên môn cao.</p>
                            <p><span>Đ/c: P.12A1, Tầng 13, Sunrise Building, 90 Trần Thái Tông, Cầu Giấy, Hà Nội</span></p>                            
                            <p><span>Email: </span><a href="mailto:info@vnsolution.com.vn">info@vnsolution.com.vn</a></p>
                        </div>
                    </div>
                    </div>
                    {}
            </div>
        {/* </footer> */}
        </div>
            <div className="footer_item">
             {/* <div class="col-lg-3 col-md-3 col-sm-6"> */}
                        <div class="nav_menu-1 nav_menu">
                            <h3 class="title">Giải pháp</h3>
                            <div class="menu-support-help-container">
                                <ul id="menu-support-help" class="menu">
                                    <li class="menu-item"><a title="Phần mềm Một cửa/Một cửa liên thông" href="/phan-mem-mot-cua-lien-thong.html">Phần mềm Một cửa/Một cửa liên thông</a></li>
                                    <li class="menu-item"><a title="Giải pháp cổng thông tin điện tử" href="/giai-phap-chinh-phu-dien-tu-sharepoint.html">Giải pháp cổng thông tin điện tử</a></li>
                                    <li class="menu-item"><a title="Phần mềm Quản lý Sản xuất Nông nghiệp" href="/phan-mem-quan-ly-san-xuat-nong-nghiep.html">Phần mềm Quản lý Sản xuất Nông nghiệp</a></li>
                                    <li class="menu-item"><a title="Phần mềm Quản lý dự án Thiết kế Xây dựng công trình" href="/phan-mem-quan-ly-thiet-ke-cong-trinh.html">Phần mềm Quản lý dự án Xây dựng</a></li>
                                    <li class="menu-item"><a title="Phần mềm Quản lý Sản xuất" href="/phan-mem-quan-ly-san-xuat.html">Phần mềm Quản lý Sản xuất</a></li>
                                    <li class="menu-item"><a title="Báo điện tử" href="/bao-dien-tu.html">Báo điện tử</a></li>
                                </ul>
                            </div>
                        </div>
                    {/* </div> */}
                   
            </div>
            <div className="footer_item"> 
            <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="nav_menu-2 nav_menu">
                            <h3 class="title">Dịch vụ</h3>
                            <div class="menu-control-panel-container">
                                <ul id="menu-control-panel" class="menu">
                                    <li class="menu-item"><a title="Thiết kế web" href="/thiet-ke-website.html">Thiết kế web</a></li>
                                    <li class="menu-item"><a title="Thiết kế phần mềm theo yêu cầu" href="/thiet-ke-phan-mem.html">Thiết kế phần mềm theo yêu cầu</a></li>
                                    <li class="menu-item"><a title="Dịch vụ Hosting" href="/hosting-domain.html">Dịch vụ Hosting</a></li>
                                    <li class="menu-item"><a title="Thiết kế nhận diện thương hiệu" href="/thiet-ke-nhan-dien-thuong-hieu.html">Thiết kế nhận diện thương hiệu</a></li>
                                    <li class="menu-item"><a title="SEO, Quảng cáo Adwords, Quảng cáp Facebook ads" href="/marketing-online">SEO, Quảng cáo Adwords, Quảng cáo Facebook</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
            <div className="footer_item">  <div class="ts_alaska_follow_us-1  TS_ALASKA_Follow_us">
                            <div class="ts-social-footer ">
                                <h3 class="title">Theo dõi chúng tôi</h3>
                                <a href="https://twitter.com/vnsolution_ltd" target="_blank"><span><i class="fa fa-twitter"></i></span></a>
                                <a href="https://www.facebook.com/vnsolution.com.vn" target="_blank"><span><i class="fa fa-facebook"></i></span></a>
                                <a href="https://plus.google.com/117612843978797128301" target="_blank"><span><i class="fa fa-google-plus"></i></span></a>
                                <a href="https://www.youtube.com/channel/UCuEzpDQlX9bOsf-GhRG4D1g" target="_blank"><span><i class="fa fa-youtube"></i></span></a>
                            </div>

                        </div></div>
            <div className="footer_item">
              
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
