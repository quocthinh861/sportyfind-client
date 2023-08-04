import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Spinner } from "react-bootstrap";
import {
  faPhone,
  faLocationDot,
  faClock,
  faStar,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Modal from "../components/Popup";

function Detail() {
  const axiosPrivate = useAxiosPrivate();

  // States
  const [fieldType, setFieldType] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isCheckLoading, setIsCheckLoading] = useState(false);

  // Refs
  const containerRef = useRef(null);

  // Validation
  const [errors, setErrors] = useState({});
  const validate = () => {
    let errors = {};
    if (!fieldType.trim()) {
      errors.fieldType = "Loại sân không được để trống";
    }
    if (!startDate) {
      errors.startDate = "Ngày đặt sân không được để trống";
    }
    if (!selectedStartTime || !selectedEndTime) {
      errors.startTime = "Thời gian đặt sân không được để trống";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handlers
  const handleStartTimeChange = (value) => {
    setSelectedStartTime(value);
  };

  const handleEndTimeChange = (value) => {
    setSelectedEndTime(value);
  };

  const handleBookNow = async () => {
    // Validate form fields
    if (!validate()) return;

    const formattedDate = startDate.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    // Create booking object
    var data = {
      startTime: selectedStartTime.format("HH:mm"),
      endTime: selectedEndTime.format("HH:mm"),
      bookingStatus: "pending",
      fieldId: fieldType,
      customerId: "1",
      bookingDate: formattedDate,
    };

    // Send booking request
    const response = await axiosPrivate.post("/booking/create", data);
    if (response.status === 200) {
      alert("Đặt sân thành công");
    } else {
      alert("Đặt sân thất bại");
    }

    console.log(data);
  };

  const handleCheckAvailability = () => {
    containerRef.current.scrollIntoView({ behavior: "smooth" });
    // Check if selected start time and end time are available
    if (!validate()) return;

    // [TODO] Check availability
    setIsCheckLoading(true); // Show loading spinner
    setIsAvailable(false); // Reset state

    setTimeout(() => {
      setIsCheckLoading(false); // Hide loading spinner
      setIsAvailable(true); // Update state based on availability
    }, 1500);
  };

  // Effects
  useEffect(() => {
    // Reset errors when form fields change
    setErrors({});
  }, [fieldType, startDate, selectedStartTime, selectedEndTime]);

  return (
    <div className="container pt-4" ref={containerRef}>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item href="/san-bong">Sân bóng đá</Breadcrumb.Item>
        <Breadcrumb.Item>Hồ Chí Minh</Breadcrumb.Item>
        <Breadcrumb.Item>Quận 12</Breadcrumb.Item>
        <Breadcrumb.Item active>Sân bóng Thiện Nhân</Breadcrumb.Item>
      </Breadcrumb>
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <h3 className="pb-2">Sân bóng Thiện Nhân</h3>
          <p>
            <FontAwesomeIcon icon={faStar} color="#f0803c" />
            <span className="stars fw-bold">4.3</span> (3 Reviews)
            <span className="ps-lg-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                color="#85c240"
                className="mr-1"
              />
              206 Vườn Lài, An Phú Đông, Quận 12
            </span>
          </p>
        </div>
        <div className="col-lg-4 col-md-5">
          <div className="pb-4 /*d-none d-md-block*/">
            {/* <button className="btn btnFilter ms-auto float-end me-2 btnActive">
              <img src="./images/heart.png" alt="img" /> Yêu thích
            </button> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7 col-md-7 mb-3">
          <img
            src="https://cdn.malaebapp.com/images/stadium/74/large"
            style={{ width: "100%", borderRadius: "20px" }}
          />
          <h5 className="mb-0 pt-4 pb-0">Địa điểm</h5>
          <img
            src="https://malaebapp.com/images/bgLarge.png"
            className="bgImg"
            alt="img"
          ></img>
          <div>
            <iframe
              title="Google Map"
              width="100%"
              height="450"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.794455546505!2d106.691472!3d10.843459799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175285b5ba680cd%3A0x57e89123fa14bd3e!2s206%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20Ph%C6%B0%E1%BB%9Dng%208%2C%20Qu%E1%BA%ADn%204%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1653039044912!5m2!1sen!2sus"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
        <div className="col-lg-5 col-md-5">
          <div>
            <button
              type="button"
              className="btn btn-success"
              disabled
              style={{ backgroundColor: "#28a745", border: "none" }}
            >
              <FontAwesomeIcon icon={faDoorOpen} className="mr-2" />
              Đang mở cửa
            </button>
            <p className="mt-2 text-capitalize">
              <b>
                <FontAwesomeIcon icon={faPhone} />
              </b>{" "}
              09090483537
              <br />
              <b>
                <FontAwesomeIcon icon={faClock} />
              </b>{" "}
              04:00 PM - 11:59 PM
            </p>
            {
              // Display error here
              Object.keys(errors).length > 0 && (
                <div
                  className="showError alert alert-danger alert-dismissible fade show mb-4"
                  role="alert"
                >
                  <strong className="font-weight-bold">
                    Vui lòng điền các thông tin còn thiếu
                  </strong>
                  <ul className="mb-0" style={{ listStyleType: "disc" }}>
                    {Object.keys(errors).map((key) => (
                      <li key={key}>{errors[key]}</li>
                    ))}
                  </ul>
                  <button className="close" onClick={() => setErrors({})}>
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M14.348 5.652a.999.999 0 00-1.414 0L10 8.586 6.066 4.652a.999.999 0 10-1.414 1.414L8.586 10l-3.934 3.934a.999.999 0 101.414 1.414L10 11.414l3.934 3.934a.999.999 0 101.414-1.414L11.414 10l3.934-3.934a.999.999 0 000-1.414z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )
            }

            <div className="form-group mb-4">
              <label htmlFor="product-description" className="form-label">
                Chọn loại sân
              </label>
              <select
                onChange={(e) => setFieldType(e.target.value)}
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Chọn loại sân</option>
                <option value="1">Sân 5</option>
                <option value="2">Sân 7</option>
                <option value="3">Sân 11</option>
              </select>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="product-description" className="form-label">
                Chọn ngày đặt sân
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
                minDate={new Date()}
                maxDate={new Date().setDate(new Date().getDate() + 7)}
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
            <div>
              <div className="form-group mb-4">
                <label htmlFor="product-description" className="form-label">
                  Chọn thời gian
                </label>
                <div>
                  <TimePicker
                    showSecond={false}
                    placeholder="Thời gian bắt đầu"
                    value={selectedStartTime}
                    onChange={handleStartTimeChange}
                    use12Hours
                    format="h:mm A"
                    className="time-picker"
                    minuteStep={15}
                  />
                  <TimePicker
                    showSecond={false}
                    placeholder="Thời gian kết thúc"
                    value={selectedEndTime}
                    onChange={handleEndTimeChange}
                    use12Hours
                    format="h:mm A"
                    className="time-picker"
                    minuteStep={15}
                  />
                  {isCheckLoading ? (
                    <div className="mt-2">
                      <Spinner
                        animation="border"
                        role="status"
                        variant="primary"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </div>
                  ) : (
                    <button
                      style={{ display: "block" }}
                      type="button"
                      className="btn btn-primary btn-sm mt-2"
                      onClick={handleCheckAvailability}
                    >
                      Kiểm tra
                    </button>
                  )}
                  {isAvailable && (
                    <div className="mt-2 text-success">
                      Thời gian đã chọn có sẵn
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="product-description" className="form-label">
                Ghi chú (Nếu có)
              </label>
              <textarea
                id="product-description"
                name="product-description"
                className="form-control"
                placeholder="Ghi chú"
              ></textarea>
            </div>
            <Modal
              buttonText="Đặt sân"
              title="Kiểm tra thông tin"
              disabled={isCheckLoading || !isAvailable}
              content={
                <div className="model-content">
                  <p>
                    Người đặt: <i>Đặng Quốc Thịnh</i>
                  </p>
                  <p>
                    Địa điểm: <i>Nhà thi đấu Bình Minh (sân 1)</i>
                  </p>
                  <p>
                    thời gian: <i>21/3/2023 (18:30 - 19:30)</i>
                  </p>
                  <p>
                    Tổng tiền: <i>350.000đ</i>
                  </p>
                  <p>
                    Ghi chú: <i>Testing</i>
                  </p>
                  <p className="note">
                    Lưu ý: Cần thanh toán trong vòng 24h kể từ khi đặt sân, hệ
                    thống tự động hủy đơn nếu không hoàn tất thanh toán. Theo
                    dõi và hoàn tất thanh toán{" "}
                    <a
                      className="text-primary"
                      href="/tai-khoan/quan-ly-lich-dat"
                    >
                      tại đây
                    </a>
                    .
                  </p>
                </div>
              }
              onConfirm={() => handleBookNow()}
              onCancel={() => console.log("Cancelled!")}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h5 className="mb-0">Thông tin thêm</h5>
        <img
          src="https://malaebapp.com/images/bgLarge.png"
          className="bgImg"
          alt="img"
        />
        <div className="mb-3">
          <div className="row">
            <div className="col my-1">
              <div className="facilities">
                <img
                  src="	https://malaebapp.com/images/facilities/ball.png"
                  width="40"
                  alt="img"
                />
                <span className="ml-2"> Ball</span>
              </div>
            </div>
            <div className="col my-1">
              <div className="facilities">
                <img
                  src="https://malaebapp.com/images/facilities/shirt.png"
                  width="40"
                  alt="img"
                />
                <span className="ml-2"> Shirts</span>
              </div>
            </div>
            <div className="col my-1">
              <div className="facilities">
                <img
                  src="https://malaebapp.com/images/facilities/shower.png"
                  width="40"
                  alt="img"
                />
                <span className="ml-2"> Showers</span>
              </div>
            </div>
            <div className="col my-1">
              <div className="facilities">
                <img
                  src="	https://malaebapp.com/images/facilities/toilet.png"
                  width="40"
                  alt="img"
                />
                <span className="ml-2"> Toilets</span>
              </div>
            </div>
            <div className="col my-1">
              <div className="facilities">
                <img
                  src="https://malaebapp.com/images/facilities/water.png"
                  width="40"
                  alt="img"
                />
                <span className="ml-1">Water</span>
                <small className="">(Extra)</small>
              </div>
            </div>
            <div className="col my-1">
              <div className="facilities">
                <img
                  src="https://malaebapp.com/images/facilities/female.png"
                  width="40"
                  alt="img"
                />
                <small className="ml-2"> Female Friendly</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="p-0 m-0 my-2 mt-4 nl2br">
        <b>Cở sở vật chất: </b> Có sân bóng đá, sân bóng chuyền và sân bóng rổ.
        Bạn có thể chơi trong 90 phút hoặc thậm chí là 120 phút. Các sân được
        thiết kế với các kỹ thuật hiện đại và được trang bị đầy đủ thiết bị cần
        thiết. Ngoài ra còn có phòng tắm và nhà vệ sinh để sử dụng. Đặt ngay từ
        Malaeb Bahrain.
      </p>
      <div className="reviews mb-3 pt-4">
        <h5 className="mb-0">Đánh giá</h5>
        <img
          src="https://malaebapp.com/images/bgLarge.png"
          className="bgImg"
          alt="img"
        ></img>
        <div className="reviews-list">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.malaebapp.com/images/user/151097/large"
                    className="imgCircle"
                    alt="img"
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-1">
                  <h5 className="fw-bold mb-1 d-flex justify-content-between">
                    Nguyễn Phúc Khang{" "}
                    <span className="float-end fw-normal textSmall">
                      3 ngày trước
                    </span>
                  </h5>
                  <p className="textVsmall">
                    <img
                      src="https://malaebapp.com/images/star.png"
                      alt="img"
                    />{" "}
                    5
                  </p>
                </div>
              </div>
              <p>Mình thấy rất hài lòng với chất lượng và dịch vụ ở sân bóng</p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.malaebapp.com/images/user/151097/large"
                    className="imgCircle"
                    alt="img"
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-1">
                  <h5 className="fw-bold mb-1 d-flex justify-content-between">
                    Bình Minh{" "}
                    <span className="float-end fw-normal textSmall">
                      3 ngày trước
                    </span>
                  </h5>
                  <p className="textVsmall">
                    <img
                      src="https://malaebapp.com/images/star.png"
                      alt="img"
                    />{" "}
                    5
                  </p>
                </div>
              </div>
              <p>Sân sạch sẽ, thoáng mát, ông chủ dễ thương. Rate 5 sao</p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.malaebapp.com/images/user/151097/large"
                    className="imgCircle"
                    alt="img"
                  />
                </div>
                <div className="flex-grow-1 mx-3 pt-1">
                  <h5 className="fw-bold mb-1 d-flex justify-content-between">
                    abdulla aqeel janahi{" "}
                    <span className="float-end fw-normal textSmall">
                      3 ngày trước
                    </span>
                  </h5>
                  <p className="textVsmall">
                    <img
                      src="https://malaebapp.com/images/star.png"
                      alt="img"
                    />{" "}
                    5
                  </p>
                </div>
              </div>
              <p>Thật tuyệt vời !!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
