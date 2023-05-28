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
            Tạo câu lạc bộ
          </h5>
        </div>
        <div className="row justify-content-center m-2">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div className="w-75">
                <div className="form-group mb-4">
                  <label htmlFor="product-description" className="form-label">
                    Tên
                  </label>
                  <input type="text" class="form-control" id="inputPassword" />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="product-description" className="form-label">
                    Mô tả
                  </label>
                  <textarea
                    id="product-description"
                    name="product-description"
                    className="form-control"
                    placeholder="Ghi chú"
                  ></textarea>
                </div>
                <div>
                  <div>
                    Điểm trung bình: <b>35</b>
                  </div>
                  <p>Trung bình: biết đỡ bóng, cơ bản.</p>
                  <input
                    type="range"
                    id="distance"
                    name="distance"
                    step="10"
                    min="20"
                    max="200"
                  />
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
