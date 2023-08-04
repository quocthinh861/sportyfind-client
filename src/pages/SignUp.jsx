import React from "react";
import { useState } from "react";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {

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
            <label htmlFor="user_name" className="form-label">
              Tên đăng nhập
            </label>
            <input
              className="form-control mb-4"
              type="telephone"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="phone"
              id="user_phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_name" className="form-label">
              Mật khẩu
            </label>
            <input
              className="form-control mb-4 w-200"
              type="telephone"
              name="phone"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="user_phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_name" className="form-label">
              Xác nhận mật khẩu
            </label>
            <input
              className="form-control mb-4 w-200"
              type="telephone"
              name="phone"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              id="user_phone"
            />
          </div>
          <button className="btn btn-block btn-green w-50 mx-auto" onClick={handleSubmit}>
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
