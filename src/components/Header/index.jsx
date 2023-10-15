import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/wepik-export-20230428080515.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/user/useSlice";
import Dropdown from "react-bootstrap/Dropdown";

// import { login } from "../features/user/useSlice";

const infoList = [
  {
    name: "Tài khoản của tôi",
    url: "/tai-khoan/thong-tin-tai-khoan",
  },
  {
    name: "Quản lý lịch đặt",
    url: "/tai-khoan/quan-ly-lich-dat",
  }
];

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    navigate("/tai-khoan/dang-nhap");
  };

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
            <div id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <a className="nav-link" href="/bang-xep-hang">
                    Bảng xếp hạng
                  </a>
                </li>
                {user?.data ? (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle
                        split
                        variant="success"
                        id="dropdown-custom-2"
                      >
                        {user?.data?.user.username}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {infoList.map((item) => (
                          <Dropdown.Item key={item.id} href={item.url}>
                            {item.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <li className="nav-item">
                      <button className="nav-link" onClick={handleLogout}>
                        Đăng xuất
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item ">
                      <a className="nav-link" href="/quan-ly-san-bong">
                        Dành cho chủ sân
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/tai-khoan/dang-nhap">
                        Đăng nhập
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
