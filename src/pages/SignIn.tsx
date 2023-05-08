import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import { useSelector, useDispatch } from 'react-redux'
import {login} from '../features/user/useSlice'
import React, { useState } from "react";

function SignIn() {
  // States
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  // Handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        '/auth/login',
        JSON.stringify({ username: username, password: password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )

      if(response.status === 200) {
        alert('Đăng nhập thành công')
        dispatch(login(response.data.result))
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  
  };


  return (
      <div className="container-fluid px-3 login">
        <div className="row min-vh-100">
          <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 py-5 px-md-5 px-xl-6 position-relative">
              <div className="mb-4">
                <h3 className="text-green">SPORTYFIND</h3>
                <h4 className="d-none d-md-block">Chào mừng bạn quay lại</h4>
              </div>
              <a
                className="btn btn btn-outline-primary btn-block btn-social mb-3"
                rel="nofollow"
                data-method="post"
                href="/users/auth/facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="fa-2x btn-social-icon"
                />{" "}
                Đăng nhập với Facebook
              </a>
              <a
                className="btn btn btn-outline-red btn-block btn-social mb-3"
                rel="nofollow"
                data-method="post"
                href="/users/auth/google_oauth2"
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="fa-2x btn-social-icon"
                />{" "}
                Đăng nhập với Google
              </a>
              <form className="form-inline mb-3" id="phone_number_container">
                <div
                  className="form-group mr-3"
                  style={{
                    flex: "1 1 0%",
                    marginBottom: "0px",
                    marginRight: "1rem",
                  }}
                >
                  <input
                    className="form-control"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Đăng nhập với số điện thoại"
                    style={{ flex: "1 1 0%" }}
                  />
                </div>

                <button className="btn btn-secondary" id="sign-in-phone">
                  <FontAwesomeIcon icon={faArrowRight} />
                  <FontAwesomeIcon icon={faSpinner} spin className="d-none" />
                </button>
              </form>
              <hr
                data-content="hoặc"
                className="my-3 hr-text letter-spacing-2"
              />
              <form
                className="new_user"
                id="new_user"
                onSubmit={handleLogin}
              >
                <input name="utf8" type="hidden" value="✓" autoComplete="off" />
                <input
                  type="hidden"
                  name="authenticity_token"
                  value="unE1RKyXb9OeuXsp9ar460VJ1DBCgJMi1+QD2+ksRSiZ1aqeZn4AqOIggibTD4Of6MxRb+qwAZ9UDa0w8aINSg=="
                  autoComplete="off"
                />
                <div className="form-group">
                  <label htmlFor="loginUsername" className="form-label">
                    Tên người dùng
                  </label>
                  <input
                    autoFocus
                    required
                    placeholder="Username"
                    className="form-control"
                    name="username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    id="username"
                  />
                </div>
                <div className="form-group mb-2">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="loginPassword" className="form-label">
                        Mật Khẩu
                      </label>
                    </div>
                  </div>
                  <input
                    autoComplete="off"
                    required
                    className="form-control"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    value={password}
                    id="password"
                  />
                </div>
                <div className="form-group mb-4">
                  <div className="custom-control custom-checkbox">
                    <input
                      name="user[remember_me]"
                      type="hidden"
                      value="0"
                      autoComplete="off"
                    />
                    <input
                      className="custom-control-input"
                      id="loginRemember"
                      type="checkbox"
                      value="1"
                      name="user[remember_me]"
                    />
                    <label
                      htmlFor="loginRemember"
                      className="custom-control-label text-muted"
                    >
                      {" "}
                      <span className="text-sm">Ghi nhớ mật khẩu</span>
                    </label>
                  </div>
                </div>
                {/* Submit */}
                <button className="btn btn-block btn-green">Đăng nhập</button>
                <div className="mt-1 row">
                  <div className="col-6">
                    <a href="/users/password/new" className="form-text small">
                      Quên mật khẩu?
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="/users/sign_up"
                      className="float-right form-text small"
                    >
                      Đăng ký
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
            {/* Image */}
            <div className="overlay pt-5 mt-5 pb-5">
              <img
                className="bg-image"
                src="https://www.sporta.vn/assets/homepage-65eca6622c95b9c3608f48316320116537f9835bd6a069e014a2848a1aec38cc.jpg"
              />
              <div className="overlay-content">
                <div className="row justify-content-center">
                  <div className="col-md-8 new-business-info text-center mt-7">
                    <h1 className="center text-green">SPORTYFIND</h1>
                    <h3 className="center text-white">
                      Website đặt sân trực tuyến
                    </h3>
                    <p className="center text-white mt-3">
                      Kết nối với đồng đội và cộng đồng những người chơi bóng đá
                      khắp thế giới. Đăng thông tin trận đấu và bắt cặp/tìm đối
                      dễ dàng. Nhận xét đối thủ sau mỗi trận. Với Sportyfind, không
                      còn tình trạng chênh lệch trình độ hay chơi xấu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignIn;
