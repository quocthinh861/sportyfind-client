import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DistanceSlider from "../components/DistanceSlider.tsx";
import { animateScroll as scroll } from "react-scroll";
import { Pagination, Spinner } from "react-bootstrap";

function List() {
  const [startDate, setStartDate] = useState(new Date());
  const [filter, setFilter] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const stadiumsPerPage = 5; // Change this value based on your requirement
  

  const mockData = [
    {
      id: 1,
      link: "/san-bong-thien-nhan",
      name: "Sân bóng Thiện Nhân",
      address: "206 Vườn Lài, An Phú Đông, Quận 12",
      distance: 13,
      totalField: 2,
      comment: 3,
      rating: 4.3,
      minPrice: 200000,
      maxPrice: 400000,
      image: "https://cdn.malaebapp.com/images/stadium/78/small",
    },
    {
      id: 2,
      link: "/san-bong-my-dinh",
      name: "Sân bóng đá Mỹ Đình",
      address: "20/93 Tổ 10, Khu phố 6, Phường Linh Trung, Quận Thủ Đức",
      distance: 13,
      totalField: 2,
      comment: 3,
      rating: 4.3,
      minPrice: 200000,
      maxPrice: 400000,
      image:
        "https://datsantructuyen.vn/images/products/2022/08/22/large/san-bong-tung-lam-6-_1661181374.jpeg",
    },
    {
      id: 2,
      link: "/san-bong-minh-tri",
      name: "Sân bóng đá Minh Trí",
      address: "Đông Hưng Thuận 11, Đông Hưng Thuận, Quận 12, TPHCM",
      distance: 13,
      totalField: 2,
      comment: 3,
      rating: 4.3,
      minPrice: 200000,
      maxPrice: 400000,
      image:
        "https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-minh-tri-2.jpg",
    },
    {
      id: 3,
      link: "/san-bong-nguyen-gia",
      name: "Sân bóng Nguyễn Gia",
      address: "961, Nguyễn Ảnh Thủ, Phường Tân Chánh Hiệp, Quận 12, TPHCM",
      distance: 6,
      totalField: 2,
      comment: 4,
      rating: 4.6,
      minPrice: 200000,
      maxPrice: 300000,
      image:
        "https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-nguyen-gia.jpg",
    },
    {
      id: 4,
      link: "/san-bong-lan-anh",
      name: "Sân bóng đá Lan Anh",
      address: "70 Đường Tân Thới Nhất 02, Tân Thới Nhất, Quận 12, TPHCM",
      distance: 15,
      totalField: 2,
      comment: ``,
      rating: 5.7,
      minPrice: 250000,
      maxPrice: 500000,
      image:
        "https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-o-quan-12.jpg",
    },
    {
      id: 5,
      link: "/san-bong-phuong-do",
      name: "Sân bóng đá Phương Đô",
      address: "37 Nguyễn Văn Lượng, Phường 10, Quận Gò Vấp, TPHCM",
      distance: 15,
      totalField: 2,
      comment: ``,
      rating: 5.7,
      minPrice: 250000,
      maxPrice: 500000,
      image:
        "https://hcmtoplist.com/wp-content/uploads/2022/03/san-bong-thanh-danh-hcmtoplist.jpg",
    },
    {
      id: 6,
      link: "/san-bong-tan-quy",
      name: "Sân bóng đá Tân Quý",
      address:
        "754/11 Đường Tân Kỳ Tân Quý, KP5, Bình Hưng Hòa, Quận Bình Tân, TPHCM",
      distance: 15,
      totalField: 2,
      comment: ``,
      rating: 5.7,
      minPrice: 250000,
      maxPrice: 500000,
      image:
        "https://images.toplist.vn/images/800px/san-bong-da-khang-an-845937.jpg",
    },
  ];
  const [listOfStadiums, setListOfStadiums] = useState(mockData);
  const [sportSelected, setSportSelected] = useState("football");
  const [fieldTypeSelected, setFieldTypeSelected] = useState("5vs5");

  const indexOfLastStadium = currentPage * stadiumsPerPage;
  const indexOfFirstStadium = indexOfLastStadium - stadiumsPerPage;
  const currentStadiums = listOfStadiums.slice(indexOfFirstStadium, indexOfLastStadium);

  const paginate = (pageNumber) => {

    // Scroll to top
    scroll.scrollToTop({
      duration: 100,
      smooth: true,
    });

    setCurrentPage(pageNumber);
  };

  const handleFieldTypeChange = (event) => {
    const { name } = event.target;

    console.log("name", name);

    // Update the selected item based on the checkbox that was clicked
    setFieldTypeSelected(name === fieldTypeSelected ? "" : name);
  };

  useEffect(() => {
    console.log("listOfStadiums", listOfStadiums);
  }, listOfStadiums);

  // Refs
  const containerRef = useRef(null);

  const handleFilter = (e) => {
    e.preventDefault();
    setIsSearching(true);

    scroll.scrollToTop({
      duration: 100,
      smooth: true,
    });

    setTimeout(() => {
      setIsSearching(false);

      // Radom size of list
      const randomSize = Math.floor(Math.random() * 4) + 1;
      setListOfStadiums(mockData.slice(0, randomSize));

      // Random order
      listOfStadiums.sort(() => Math.random() - 0.5);
    }, 500);

    setFilter(!filter);
  };

  return (
    <>
      <div className="topStaduims mb-4" ref={containerRef}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="d-none d-md-block">
                <h3 className="text-center">
                  <img
                    className="me-2"
                    src="https://malaebapp.com/images/point.png"
                    alt="img"
                  />{" "}
                  <span className="border-bottom text-uppercase">Bộ lọc</span>{" "}
                  <img
                    className="ms-2"
                    src="https://malaebapp.com/images/point.png"
                    alt="img"
                  />
                </h3>
              </div>
              <p className="mt-2 mb-1 fw-bold">Ngày</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  maxDate={new Date().setDate(new Date().getDate() + 7)}
                  inline
                  calendarClassName="custom-calendar" // add a custom CSS class to the calendar container
                  className="custom-datepicker" // add a custom CSS class to the date-picker container
                  dayClassName={(date) =>
                    date.getTime() === startDate.getTime()
                      ? "custom-selected"
                      : undefined
                  } // add a custom CSS class to the selected date element
                  showMonthYearPicker={false} // disable month and year picker
                />
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <p className="mt-2 mb-1 fw-bold">Thời gian</p>
                    <select className="form-control text-uppercase">
                      <option>Chọn khung giờ</option>
                    </select>
                  </div>
                </div>
              </div>
              <p className="fw-bold mt-4 mb-1">Môn thể thao</p>
              <div
                className="row pb-4 btnSlot d-md-flex d-none sports_icons"
                dir="ltr"
              >
                <div className="col-4 p-2" title="All Sports">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="1"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-success w-100" htmlFor="1">
                    <img
                      src="https://malaebapp.com/images/sports/0.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="col-4 p-2" title="Football">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="2"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-success w-100 " htmlFor="2">
                    <img
                      src="https://malaebapp.com/images/sports/1.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="col-4 p-2" title="Basketball">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    autoComplete="off"
                    id="3"
                  />
                  <label className="btn btn-outline-success w-100 " htmlFor="3">
                    <img
                      src="https://malaebapp.com/images/sports/2.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="col-4 p-2" title="Padel">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="4"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-success w-100 " htmlFor="4">
                    <img
                      src="https://malaebapp.com/images/sports/3.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="col-4 p-2" title="Volleyball">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    id="5"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-success w-100 " htmlFor="5">
                    <img
                      src="https://malaebapp.com/images/sports/4.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="col-4 p-2" title="Futsal">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    autoComplete="off"
                    id="6"
                  />
                  <label className="btn btn-outline-success w-100 " htmlFor="6">
                    <img
                      src="https://malaebapp.com/images/sports/8.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="row pb-4 btnSlot d-md-flex d-none" dir="ltr">
                  <p className="pt-3 mb-1 fw-bold">Loại sân</p>
                  <div className="row">
                    <div className="col-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="fieldType"
                        id="5vs5"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="5vs5"
                      >
                        5 V 5
                      </label>
                    </div>
                    <div className="col-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="fieldType"
                        id="6vs6"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="6vs6"
                      >
                        6 V 6
                      </label>
                    </div>
                    <div className="col-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="7vs7"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="7vs7"
                      >
                        7 V 7
                      </label>
                    </div>
                    <div className="col-4 mt-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="8vs8"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="8vs8"
                      >
                        8 V 8
                      </label>
                    </div>
                    <div className="col-4 mt-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="9vs9"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="9vs9"
                      >
                        9 V 9
                      </label>
                    </div>
                    <div className="col-4 mt-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="11vs11"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="11vs11"
                      >
                        11 V 11
                      </label>
                    </div>
                    <DistanceSlider />
                  </div>
                  <div className="row mt-4">
                    <button className="btn btn-outline-dark btn-lg col mx-1">
                      Xóa
                    </button>
                    <button
                      className="btn btn-success btn-lg col mx-1"
                      onClick={handleFilter}
                    >
                      Lọc
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-md-block">
              {isSearching ? (
                <div className="mt-2 d-flex justify-content-center">
                  <Spinner
                    animation="border"
                    role="status"
                    variant="primary"
                    style={{}}
                  >
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <>
                  {currentStadiums.length > 0
                    ? currentStadiums.map((stadium, index) => (
                        <a
                          className="card mb-4 cardList d-none d-md-flex"
                          href={stadium.link}
                        >
                          <div className="row g-0">
                            <div className="col-md-4 position-relative thumnail">
                              <img
                                src={stadium.image}
                                className="card-img-top"
                                alt="null"
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5>
                                  {stadium.name}
                                  <span className="float-end stars flex flex-col justify-center items-center">
                                    <span>
                                      <FontAwesomeIcon
                                        icon={faStar}
                                        color="#f0803c"
                                      />{" "}
                                      {stadium.rating}/5
                                    </span>
                                    <div>
                                      <small className="text-muted text-sm text-center w-full">
                                        {stadium.comment} đánh giá
                                      </small>
                                    </div>
                                  </span>
                                </h5>
                                <p>
                                  <small title="Bahrain, Riffa - Southern Governorate">
                                    {stadium.address}
                                  </small>
                                  <small className="badge badge-dark label-dark mx-1 p-1 text-black-50">
                                    {stadium.distance} KM Away
                                  </small>
                                </p>
                                <div className="flex flex-row justify-between">
                                  <h6 className="d-none d-md-block">
                                    2 sân
                                    <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                                      <img
                                        src="https://malaebapp.com/images/sports/1.png"
                                        width="20"
                                        alt="img"
                                      />{" "}
                                      5 v 5
                                    </span>
                                    <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                                      <img
                                        src="https://malaebapp.com/images/sports/1.png"
                                        width="20"
                                        alt="img"
                                      />{" "}
                                      7 v 7
                                    </span>
                                  </h6>
                                  <i>
                                    Giá: {stadium.minPrice}đ -{" "}
                                    {stadium.maxPrice}đ
                                  </i>
                                </div>
                                <button className="book-now">Đặt ngay</button>
                              </div>
                            </div>
                          </div>
                        </a>
                      ))
                    : "Trống"}
                </>
              )}
        {
          currentStadiums.length > 0 && (
            <div className="d-flex justify-content-center">
              <Pagination>
                {Array.from({ length: Math.ceil(listOfStadiums.length / stadiumsPerPage) }, (_, i) => (
                  <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )
        }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
