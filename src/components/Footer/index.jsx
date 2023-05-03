import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="position-relative d-print-none mt-auto pt-5">
      {/* Main block - menus, subscribe form*/}
      <div className="py-5 bg-gray-200 text-muted">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-dark mb-3">Về Sportyfind</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/pages/about-us" className="text-muted">
                    Giới thiệu Sportyfind
                  </a>
                </li>
                <li>
                  <a href="/bai-viet" className="text-muted">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/pages/dieu-khoan-su-dung" className="text-muted">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href="/pages/chinh-sach-bao-mat" className="text-muted">
                    Chính sách bảo mật
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mb-5 mb-lg-0">
              <div className="font-weight-bold text-uppercase text-dark mb-3">
                Thông tin liên hệ
              </div>
              <ul className="list-unstyled">
                <li className="text-muted">
                  <a
                    href="https://www.facebook.com/sportavn/"
                    target="_blank"
                    title="facebook"
                    className="text-muted text-hover-primary"
                  >
                    <FontAwesomeIcon icon={faFacebook} /> sportyfind
                  </a>
                </li>
                <li className="text-muted">
                  <a
                    className="text-muted text-hover-primary"
                    href="mailto:hello@sporta.vn"
                  >
                    <FontAwesomeIcon icon={faEnvelope} /> hello@sportyfind.vn
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-dark mb-3">Thanh toán</h6>
              <ul className="list-unstyled">
                <li className="text-muted">
                  <a className="text-muted text-hover-primary">
                    <img
                      className="d-inline"
                      style={{ height: "25px", marginBottom: "10px" }}
                      src="https://www.sporta.vn/assets/momo-f2c88c55af645265139d91c8ec6e31182b68283d335ef35dff10bc90da8ddb3b.png"
                      alt="Momo"
                    />{" "}
                    Momo
                  </a>
                </li>
                <li className="text-muted">
                  <a className="text-muted text-hover-primary">
                    <FontAwesomeIcon
                      icon={faMoneyCheckAlt}
                      style={{ fontSize: "20px" }}
                    />{" "}
                    Tiền mặt
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-dark mb-3">Tin tức</h6>
              <ul className="list-unstyled">
                <li className="text-muted">
                  <a href="/tin-tuc" className="text-muted text-hover-primary">
                    Các sự kiện thể thao
                  </a>
                </li>
                <li className="text-muted">
                  <a href="/tin-tuc" className="text-muted text-hover-primary">
                    Tin tức mới nhất
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright section of the footer*/}
      {/* <div className="py-4 font-weight-light bg-gray-800 text-gray-300">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center text-md-center">
              <p className="text-sm mb-md-0">
                <span>© 20 Bản quyền của Công Ty TNHH Sporta</span>
                <br />
                <span>
                  Giấy chứng nhận Đăng ký Kinh doanh số 0315485936 do Sở Kế
                  hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 17/01/2019
                </span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
