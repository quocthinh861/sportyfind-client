import React from "react";
import "./style.css";
import teamLogo from "../../assets/images/barrier.png";
import footballPlayer from "../../assets/images/football-player.png";
import starIcon from "../../assets/images/icons/star.png";
import groupIcon from "../../assets/images/icons/group.png";
import flashIcon from "../../assets/images/icons/flash.png";
import crownIcon from "../../assets/images/icons/crown.png";

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
          <div className="col-4">
            <div className="profile-picture">
              <div className="avatar">
                <img
                  id="avatar"
                  style={{
                    width: "100%",
                    borderRadius: "50%",
                    textAlign: "center",
                  }}
                  src={footballPlayer}
                />
              </div>
            </div>
            <p className="text-center mt-4">Ảnh đại diện</p>
            <div className="team-list">
              <div className="flex justify-between mb-2">
                <a>Câu lạc bộ</a>
                <small>Tạo CLB mới</small>
              </div>
              <div className="team-item bg-gray-100">
                <div className="team-item__logo">
                  <img src={teamLogo} />
                </div>
                <div className="team-item__info">
                  <img src={crownIcon} className="w-5 h-5 logo-owner" />
                  <div className="team-item__name">Chiến thần</div>
                  <div className="team-item__description">
                    <span>
                      <img src={flashIcon} className="w-5 h-5" />
                      369
                      <p className="show-info">
                        <b>Điểm trình độ: </b>
                        Đây là điểm trình độ của bạn so với các đội khác. Điểm
                        càng cao thì trình độ càng tốt.
                      </p>
                    </span>
                    <span>
                      <img src={groupIcon} className="w-5 h-5" />
                      10
                      <p className="show-info">
                        <b>Số lượng: </b> 10 thành viên
                      </p>
                    </span>
                    <span>
                      <img src={starIcon} className="w-5 h-5" />
                      100
                      <p className="show-info">
                        <b>Điểm uy tín: </b>
                        <ul>
                          <li>Điểm uy tín mặc định là 100.</li>
                          <li>
                            Đá và nhận xét thành công sẽ nhận được 1 điểm.
                          </li>
                          <li>Hủy kèo sát giờ chơi sẽ bị trừ 3 điểm.</li>
                        </ul>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-8">
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
                      Cân nặng (kg)
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
