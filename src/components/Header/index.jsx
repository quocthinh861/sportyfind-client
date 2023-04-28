import React from "react";
import "./style.css";
import logo from "../../assets/images/wepik-export-20230428080515.png";
import Dropdown from "../Dropdown/Template_01";

function Header() {
  return (
    <section className="header-section">
      <div className="sportyfind-nav navbar-fixed">
        <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
          <div className="container-fluid">
            <div className="d-flex ml-md-4 align-items-center">
              <a href="/" className="navbar-brand py-1 ml-2">
                <img
                  src={logo}
                  alt="Sport Finder logo"
                  style={{ width: "35px", height: "35px" }}
                />
              </a>
            </div>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              <i className="fa fa-bars"></i>
            </button>
            {/* Navbar Collapse */}
            <div id="navbarCollapse" className="collapse navbar-collapse mr-3">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <a className="nav-link" href="/bang-xep-hang">
                    Bảng xếp hạng
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/quan-ly-san-bong">
                    Dành cho chủ sân
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.sportyfind.vn/users/sign_in"
                  >
                    Đăng nhập
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
