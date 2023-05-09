import React from "react";

function Home() {
  return (
    <>
      <div className="sectionFirst">
        <div className="overlay">
          <div className="container pt-5">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 className="text-white fw-bold pt-5">
                  Đặt sân thể thao chưa bao giờ dễ dàng hơn với Sportyfind.
                </h1>
                <p className="text-white py-4">
                  Tìm kiếm sân xung quanh bạn ở Thành phố Hồ Chí Minh
                </p>
                <button className="search-now">Tìm kiếm ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="sport-list">
          <h3 className="text-center text-uppercase">
            <img
              className="me-2 d-inline"
              src="https://malaebapp.com/images/point.png"
              alt="img"
            />{" "}
            Sân thể thao Thành phố Hồ Chí Minh {" "}
            <img
              className="ms-2 d-inline"
              src="https://malaebapp.com/images/point.png"
              alt="img"
            />
          </h3>
          <div className="row pt-5">
            <div className="col-lg-3 col-md-4 col-6 mb-3 clickable">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="https://vuongtrachdesign.com/w/thethao/wp-content/uploads/2019/12/img7742-8409.jpg"
                    className="imgMedia"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-lg-4 pt-md-4 pt-sm-3 pt-1">
                  <h6 className="fw-bold pt-1">Quận 1</h6>
                  <p className="textVsmall">26</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-3 clickable">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="https://images.foody.vn/res/g14/131336/prof/s576x330/foody-mobile-87-jpg-428-635649729499912898.jpg"
                    className="imgMedia"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-lg-4 pt-md-4 pt-sm-3 pt-1">
                  <h6 className="fw-bold pt-1">Quận 2</h6>
                  <p className="textVsmall">15</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-3 clickable">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="http://thanhphatsports.com/vantindat/images/image1.jpeg"
                    className="imgMedia"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-lg-4 pt-md-4 pt-sm-3 pt-1">
                  <h6 className="fw-bold pt-1">Quận 12</h6>
                  <p className="textVsmall">10</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-3 clickable">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="https://nld.mediacdn.vn/k:thumb_w/684/2015/thethao-1444486269151/khanh-thanh-cau-lac-bo-tdtt-ho-xuan-huong.jpg"
                    className="imgMedia"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-lg-4 pt-md-4 pt-sm-3 pt-1">
                  <h6 className="fw-bold pt-1">Quận 5</h6>
                  <p className="textVsmall">8</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-3 clickable">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Qu%C3%A2n_khu_7.jpg/330px-S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Qu%C3%A2n_khu_7.jpg"
                    className="imgMedia"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-lg-4 pt-md-4 pt-sm-3 pt-1">
                  <h6 className="fw-bold pt-1">Gò Vấp</h6>
                  <p className="textVsmall">22</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-3 clickable">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="https://thethaodonga.com/wp-content/uploads/2022/03/san-bong-chuyen-tai-tphcm-3.png"
                    className="imgMedia"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-lg-4 pt-md-4 pt-sm-3 pt-1">
                  <h6 className="fw-bold pt-1">Tân Bình</h6>
                  <p className="textVsmall">6</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-3 clickable">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/09/28/tennis/ntd-pt.jpg"
                    className="imgMedia"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-lg-4 pt-md-4 pt-sm-3 pt-1">
                  <h6 className="fw-bold pt-1">Bình Thạnh</h6>
                  <p className="textVsmall">27</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-3 clickable">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="https://fileth.hcm.edu.vn/UploadImages/thvothisauq7/2022_11/12_BONGROCAPQUAN/023_3011202211.jpg?w=1130"
                    className="imgMedia"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-lg-4 pt-md-4 pt-sm-3 pt-1">
                  <h6 className="fw-bold pt-1">Hóc Môn</h6>
                  <p className="textVsmall">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <h3 className="text-center">
            <img
              className="me-2 d-inline"
              src="https://malaebapp.com/images/point.png"
              alt="img"
            />{" "}
            Chọn sân theo nhu cầu{" "}
            <img
              className="ms-2 d-inline"
              src="https://malaebapp.com/images/point.png"
              alt="img"
            />
          </h3>
          <div className="row justify-content-center pt-5">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/0.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div className="flex-grow-1 mx-3 pt-1">
                      <h5>Tất cả</h5>
                      <p>400 sân</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/1.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div className="flex-grow-1 mx-3 pt-1">
                      <h5>Bóng đá</h5>
                      <p>203 sân</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/2.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div className="flex-grow-1 mx-3 pt-1">
                      <h5>Bóng rổ</h5>
                      <p>12 sân</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/3.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div className="flex-grow-1 mx-3 pt-1">
                      <h5>Cầu lông</h5>
                      <p>34 sân</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/4.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div className="flex-grow-1 mx-3 pt-1">
                      <h5>Bóng chuyền</h5>
                      <p>21 sân</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/8.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div className="flex-grow-1 mx-3 pt-1">
                      <h5>Fulsal</h5>
                      <p>139 sân</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <h3 className="text-center">
            <img
              className="me-2 d-inline"
              src="https://malaebapp.com/images/point.png"
              alt="img"
            />{" "}
            Đặt sân trong vòng vài phút{" "}
            <img
              className="ms-2 d-inline"
              src="https://malaebapp.com/images/point.png"
              alt="img"
            />
          </h3>
          <div className="row justify-content-around pt-5">
            <div className="col-lg-3 col-md-3 sm-6 text-md-center text-lg-center mb-3">
              <div className="d-md-block d-flex">
                <div className="bgImage">
                  <img
                    src="https://malaebapp.com/images/Position.png"
                    className="img-fluid mx-auto d-block imageFixedHeight"
                    alt="img"
                  />
                </div>
                <div>
                  <h3 className="fw-bold pt-4 pt-lg-3">Tìm</h3>
                  <p className="textSmall">Sân lân cận, giá hợp lí</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 sm-6 text-md-center text-lg-center mb-3">
              <div className="d-md-block d-flex">
                <div className="bgImage">
                  <img
                    src="https://malaebapp.com/images/calendar.png"
                    className="img-fluid mx-auto d-block imageFixedHeight"
                    alt="img"
                  />
                </div>
                <div>
                  <h3 className="fw-bold pt-4 pt-lg-3">Chọn</h3>
                  <p className="textSmall">
                    Ngày, giờ và loại sân
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 sm-6 text-md-center text-lg-center mb-3">
              <div className="d-md-block d-flex">
                <div className="bgImage">
                  <img
                    src="https://malaebapp.com/images/Creditcard.png"
                    className="img-fluid mx-auto d-block imageFixedHeight"
                    alt="img"
                  />
                </div>
                <div>
                  <h3 className="fw-bold pt-4 pt-lg-3">Thanh toán</h3>
                  <p className="textSmall">Nhanh chóng và tiện ích</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
