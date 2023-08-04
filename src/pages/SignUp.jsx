import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user/useSlice";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateInput() === false) return;
    try {
      const response = await axios.post(
        '/auth/register',
        JSON.stringify({ username: userName, password: password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )

      if(response.status === 200) {
        toast.success("Đăng ký thành công");
        console.log(response);
        dispatch(logout());
        useNavigate().navigate('/tai-khoan/dang-nhap');
      } else {
        toast.error("Đăng ký thất bại");
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
      console.log(error);
    }

  };

  // Validate input
  const validateInput = () => {
    if (userName === "") {
      toast.error("Vui lòng nhập tên đăng nhập");
      return false;
    }
    if (password === "") {
      toast.error("Vui lòng nhập mật khẩu");
      return false;
    }
    if (confirmPassword === "") {
      toast.error("Vui lòng nhập lại mật khẩu");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Mật khẩu không khớp");
      return false;
    }
    return true;
  };


  return (
    <div className="container-fluid px-3 login auth pt-4">
      <div className="row w-50 mx-auto">
        <div className="d-flex flex-column">
          <p
            className="text-green text-300 font-weight-bold text-center"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Đăng ký tài khoản
          </p>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Tên đăng nhập
            </label>
            <input
              className="form-control mb-4"
              type="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="username"
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <input
              className="form-control mb-4 w-200"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword" className="form-label">
              Xác nhận mật khẩu
            </label>
            <input
              className="form-control mb-4 w-200"
              type="password"
              name="confirmpassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              id="confirmpassword"
            />
          </div>
          <button className="btn btn-block btn-green w-50 mx-auto" onClick={handleSubmit}>
            Đăng ký
          </button>
        </div>
      </div>
      <ToastContainer
        hideProgressBar={true}
        autoClose={1500}
        theme="colored"
        />
    </div>
  );
}

export default SignUp;
