import React from "react";
import "./style.css";
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/images/wepik-export-20230428080515.png";
import { useSelector, useDispatch } from "react-redux";
import {logout} from '../../features/user/useSlice'
// import { login } from "../features/user/useSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  console.log(user)


  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    navigate("/users/sign-in");
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
                    <li className="nav-item ">
                      <a  className="nav-link" href="">{user.data.user.username}</a>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        onClick={handleLogout}
                      >
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
                      <a
                        className="nav-link"
                        href="/users/sign-in"
                      >
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
