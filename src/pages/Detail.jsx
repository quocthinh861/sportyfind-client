import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "react-bootstrap";
import {
  faPhone,
  faLocationDot,
  faClock,
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
  const [isCheckLoading, setIsCheckLoading] = useState(false); // [TODO

  // Validation
  const [errors, setErrors] = useState({});
  const validate = () => {
    let errors = {};
    if (!fieldType.trim()) {
      errors.fieldType = "Field type is required";
    }
    if (!startDate) {
      errors.startDate = "Start date is required";
    }
    if (!selectedStartTime) {
      errors.startTime = "Start time is required";
    }
    if (!selectedEndTime) {
      errors.endTime = "End time is required";
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
    <div className="container pt-4">
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <h3 className="pb-2">Sân bóng thiện nhân</h3>
          <p>
            <img src="./images/star.png" alt="img" />
            <span className="stars fw-bold">1.3</span> (3 Reviews)
            <span className="ps-lg-5 mx-2">
              <img src="./images/Combined.png" alt="img" /> Bahrain, Bu Quwah
            </span>
          </p>
        </div>
        <div className="col-lg-4 col-md-5">
          <div className="pb-4 /*d-none d-md-block*/">
            <button
              className="btn btnFilter ms-auto float-end"
              data-bs-toggle="modal"
              data-bs-target="#modalFilter"
            >
              <img src="./images/share.png" alt="img" /> Share
            </button>
            <button className="btn btnFilter ms-auto float-end me-2 btnActive">
              <img src="./images/heart.png" alt="img" /> UnSave
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7 col-md-7 mb-3">
          <img
            src="https://cdn.malaebapp.com/images/stadium/74/large"
            style={{ width: "100%" }}
          />
          <h5 className="mb-0 pt-4 pb-0">Stadium Location</h5>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1839669308755!2d-74.00594178474802!3d40.71277540697792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17bc9f409f%3A0x8c8d43c031a34aaf!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1620410414013!5m2!1sen!2sus"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
        <div className="col-lg-5 col-md-5">
          <div>
            <p className="pb-3 m-0 text-capitalize">
              <b>
                <FontAwesomeIcon icon={faLocationDot} />{" "}
              </b>{" "}
              34/7 Nguyễn Văn Lượng, Quận Gò Vấp, Tp. Hồ Chí Minh <br />
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
                      Thời gian đã chọn có sẵn.
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
                  <p class="note">
                    Lưu ý: Cần thanh toán trong vòng 24h kể từ khi đặt sân, hệ
                    thống tự động hủy đơn nếu không hoàn tất thanh toán. Tình
                    trạng sân các bạn theo dõi <a class="text-primary">ở đây</a>
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
        <h5 className="mb-0">We Offer</h5>
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
      <p className="p-0 m-0 my-2 mt-4 text-capitalize nl2br">
        <b>About Us: </b> Play all your favourite sports on Aqua park indoor
        pitches. There are football pitches, volleyball pitches, and basketball
        pitches. You can play for 90 mins- or even 120 mins. Pitches are
        designed with modern techniques and all needed equipment, there are also
        showers and toilets to use. Book it now from Malaeb Bahrain. Note: The
        pitch has the right to charge the booking amount if it's cancelled 24
        hours before the game time. Payments are collected in advance.
      </p>
      <div className="reviews mb-3 pt-4">
        <h5 className="mb-0">Reviews</h5>
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
                    abdulla aqeel janahi{" "}
                    <span className="float-end fw-normal textSmall">
                      6 months ago
                    </span>
                  </h5>
                  <p className="textVsmall">
                    <img src="./images/star.png" alt="img" /> 5
                  </p>
                </div>
              </div>
              <p>ملعب مزعج(الac) صوته وايد عالي… وحرررر… غالي على مستواه</p>
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
                      6 months ago
                    </span>
                  </h5>
                  <p className="textVsmall">
                    <img src="./images/star.png" alt="img" /> 5
                  </p>
                </div>
              </div>
              <p>ملعب مزعج(الac) صوته وايد عالي… وحرررر… غالي على مستواه</p>
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
                      6 months ago
                    </span>
                  </h5>
                  <p className="textVsmall">
                    <img src="./images/star.png" alt="img" /> 5
                  </p>
                </div>
              </div>
              <p>ملعب مزعج(الac) صوته وايد عالي… وحرررر… غالي على مستواه</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
