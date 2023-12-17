import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
function Account() {

  return (
    <div className="user-page-content">
      <section className="border-light">
        <div className="row justify-content-center m-2">
          <h5
            className="w-100 text-center d-none d-md-block"
            style={{ fontWeight: 700 }}
          >
            Thông tin tài khoản
          </h5>
        </div>
        <div className="row justify-content-center m-2">
          <div className="col-md-3">
            <div className="profile-picture">
              <div className="avatar">
                <img
                  id="avatar"
                  style={{
                    width: "100%",
                    borderRadius: "50%",
                    textAlign: "center",
                  }}
                  src="https://www.sporta.vn/assets/default_user_image-dc0209ffeabf7fa68fcbc7d512a6ceeb051ad3fb16706d26679cccdcf3384043.png"
                />
              </div>
            </div>
            <p className="text-center mt-4">Ảnh đại diện</p>
          </div>
          <div className="col col-md-9">
            <div className="d-flex justify-content-center">
              <div className="w-75">
                <div className="form-row">
                  <div className="form-group col-md-6 mb-4">
                    <label htmlFor="user_email" className="form-label">
                      Email
                    </label>
                    <input
                      className="form-control"
                      placeholder="Email"
                      type="email"
                      value="quocthinh861@gmail.com"
                      name="user[email]"
                      id="user_email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="user_name" className="form-label">
                      Họ Tên
                    </label>
                    <input
                      className="form-control"
                      placeholder="Họ Tên"
                      type="text"
                      value="Thịnh Đặng"
                      name="user[name]"
                      id="user_name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="user_name" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    className="form-control mb-4"
                    placeholder="Số điện thoại"
                    type="telephone"
                    value="0909483537"
                    name="phone"
                    id="user_phone"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="user_address" className="form-label">
                    Địa chỉ
                  </label>
                  <input
                    className="form-control"
                    type="telephone"
                    name="address"
                    id="uuser_address"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6 mb-4">
                    <label htmlFor="product-description" className="form-label">
                    Thành phố/Tỉnh
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultChecked="Tp Hồ Chí Minh"
                    >
                      <option value="1">Tp Hồ Chí Minh</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <label htmlFor="product-description" className="form-label">
                    Quận/Huyện
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultChecked="Quận Gò Vấp"
                    >
                      <option value="1">Quận Gò Vấp</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6 mb-4">
                    <label htmlFor="user_email" className="form-label">
                      Chiều cao (cm)
                    </label>
                    <input
                      className="form-control"
                      placeholder="cm"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="user_name" className="form-label">
                      Cân nặng(kg)
                    </label>
                    <input
                      className="form-control"
                      placeholder="kg"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group col-md-12 mb-4">
                  <label htmlFor="user_email" className="form-label">
                    Ngày sinh
                  </label>
                  <input
                    className="form-control"
                    placeholder="Ngày sinh"
                    type="date"
                    name="user[date_of_birth]"
                    id="user_date_of_birth"
                  />
                </div>
                <button name="button" className="btn btn-green">
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account;
