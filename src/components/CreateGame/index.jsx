import React from "react";
import "./style.css";

function Account() {
  return (
    <div className="user-page-content">
      <section className="border-light">
        <div className="row justify-content-center m-2">
          <h5
            className="w-100 text-center d-none d-md-block"
            style={{ fontWeight: 700 }}
          >
            Tạo trận đấu mới
          </h5>
        </div>
        <div className="row justify-content-center m-2">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div className="w-75">
                <div className="form-group row mb-4">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Chọn đội
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group row mb-4">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Sân bóng
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group row mb-4">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Liên hệ
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group row mb-4">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Ghi chú
                  </label>
                  <div class="col-sm-10">
                    <textarea
                      id="product-description"
                      name="product-description"
                      className="form-control"
                      placeholder="Ghi chú"
                    ></textarea>
                  </div>
                </div>
                <button
                  name="button"
                  className="btn btn-orange d-block mx-auto"
                >
                  Tạo mới
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
