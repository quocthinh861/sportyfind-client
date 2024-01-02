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
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { compareTimes, formatDateAndTime, formatTimeDifference } from "../utils/TimeUtil";
import Map from "../components/Map";

const StarRating = ({ rating, onStarClick }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <img
          key={star}
          src={
            star <= rating
              ? "https://malaebapp.com/images/star-filled.png"
              : "https://malaebapp.com/images/star.png"
          }
          width="20"
          alt="star"
          className="cursor-pointer"
          onClick={() => onStarClick(star)}
        />
      ))}
    </div>
  );
};

function Detail() {
  const axiosPrivate = useAxiosPrivate();
  const { url } = useParams();
  const [field, setField] = useState({});
  const user = useSelector((state) => state.user);
  const userId = user.data?.user?.id;
  const fullname = user.data?.user?.fullName;
  const username = user.data?.user?.username;

  useEffect(() => {
    const fetchData = async () => {
      document.title = "Chi tiết sân bóng";

      try {
        // Get all teams from API
        const res = await axiosPrivate.get(
          "/field/getFieldDetailByURL?url=" + url
        );
        if (res.status === 200) {
          setField(res.data.result);
          setFieldReviews(res.data.result.venue.reviews);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function

    // If you have any cleanup logic, you can return a function
    // For example: return () => { /* cleanup logic */ };
  }, []);

  // States
  const [fieldType, setFieldType] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isCheck, setIsCheck] = useState(false); // [TODO
  const [isCheckLoading, setIsCheckLoading] = useState(false);
  const [note, setNote] = useState("");
  const [review, setReview] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [fieldReviews, setFieldReviews] = useState([]); // [TODO

  const totalPrice = () => {
    if (selectedStartTime && selectedEndTime) {
      const start = selectedStartTime.format("HH:mm");
      const end = selectedEndTime.format("HH:mm");
      const startTime = start.split(":");
      const endTime = end.split(":");
      const startHour = parseInt(startTime[0]);
      const startMinute = parseInt(startTime[1]);
      const endHour = parseInt(endTime[0]);
      const endMinute = parseInt(endTime[1]);
      const totalHour = endHour - startHour;
      const totalMinute = endMinute - startMinute;
      const total = totalHour + totalMinute / 60;
      return total * field.hourlyRate;
    }
    return 0;
  };

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
    if (
      selectedStartTime &&
      selectedEndTime &&
      selectedStartTime >= selectedEndTime
    ) {
      errors.startTime = "Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc";
    }
    // check open time and close time
    if(compareTimes(selectedStartTime.format("HH:mm:ss"), field.venue.openTime) === -1) {
      errors.startTime = "Thời gian bắt đầu phải sau thời gian mở cửa";
    }

    if(compareTimes(selectedEndTime.format("HH:mm:ss"), field.venue.closeTime) === 1) {
      errors.startTime = "Thời gian kết thúc phải trước thời gian đóng cửa";
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

  const checkReviewSubmitAllready = () => {
    if (fieldReviews.length > 0) {
      for (let i = 0; i < fieldReviews.length; i++) {
        if (fieldReviews[i].username === username) {
          return true;
        }
      }
    }
    return false;
  };

  const handleReviewSubmit = () => {
    if (checkReviewSubmitAllready()) {
      if (
        window.confirm(
          "Bạn đã đánh giá sân này rồi, bạn có muốn đánh giá lại không?"
        )
      ) {
        var data = {
          userId: userId,
          venueId: field?.venue?.venueId,
          content: review,
          rating: selectedRating,
        };

        axiosPrivate.post("/field/submitReview", data).then((res) => {
          if (res.status === 200) {
            alert("Đánh giá thành công");

            // remove old review
            var newFieldReviews = fieldReviews.filter(
              (review) => review.username !== username
            );
            setFieldReviews([...newFieldReviews, res.data.result]);

            // Reset review form
            setReview("");
            setSelectedRating(0);
          } else {
            alert("Đánh giá thất bại");
          }
        });
      }
    } else {
      var data = {
        userId: userId,
        venueId: field?.venue?.venueId,
        content: review,
        rating: selectedRating,
      };

      axiosPrivate.post("/field/submitReview", data).then((res) => {
        if (res.status === 200) {
          alert("Đánh giá thành công");

          // remove old review
          var newFieldReviews = fieldReviews.filter(
            (review) => review.username !== username
          );
          setFieldReviews([...newFieldReviews, res.data.result]);

          // Reset review form
          setReview("");
          setSelectedRating(0);
        } else {
          alert("Đánh giá thất bại");
        }
      });
    }
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
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
      fieldId: field && field.fieldId,
      customerId: userId,
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

    setTimeout(() => {
      const formattedDate = startDate.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });

      axiosPrivate
        .post("/booking/checkAvailability", {
          fieldId: field && field.fieldId,
          bookingDate: formattedDate,
          startTime: selectedStartTime.format("HH:mm"),
          endTime: selectedEndTime.format("HH:mm"),
        })
        .then((res) => {
          setIsCheck(true); // Show check result
          if (res.status === 200) {
            setIsCheck(true); // Show check result
            const isAvailable = res.data.result;
            setIsAvailable(isAvailable); // Update state based on availability
          } else {
            setIsAvailable(false);
          }
          setIsCheckLoading(false); // Hide loading spinner
        })
        .catch((err) => {
          alert("Đã có lỗi xảy ra");
          setIsCheckLoading(false); // Hide loading spinner
        });
    }, 1500);
  };

  // Effects
  useEffect(() => {
    // Reset errors when form fields change
    setErrors({});
  }, [fieldType, startDate, selectedStartTime, selectedEndTime]);

  return (
    <div className="container pt-4" ref={containerRef}>
      {field && field.venue && (
        <Breadcrumb>
          <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item href="/san-bong">Sân bóng đá</Breadcrumb.Item>
          <Breadcrumb.Item>Hồ Chí Minh</Breadcrumb.Item>
          <Breadcrumb.Item>Quận {field.venue.district}</Breadcrumb.Item>
          <Breadcrumb.Item active>{field.fieldName}</Breadcrumb.Item>
        </Breadcrumb>
      )}
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <h3 className="pb-2">{field.fieldName}</h3>
          <p>
            <FontAwesomeIcon icon={faStar} color="#f0803c" />
            <span className="stars fw-bold">
              {
                // show average rating here only 1 decimal place
                field &&
                  field.venue &&
                  field.venue.reviews &&
                  field.venue.reviews.length > 0 &&
                  (
                    field.venue.reviews.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue.rating,
                      0
                    ) / field.venue.reviews.length
                  ).toFixed(1)
              }
            </span>{" "}
            (
            {field &&
              field.venue &&
              field.venue.reviews &&
              field.venue.reviews.length}{" "}
            Reviews)
            <span className="ps-lg-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                color="#85c240"
                className="mr-1"
              />
              {field.venue &&
                field.venue.address +
                  ", Phường " +
                  field.venue.ward +
                  ", Quận " +
                  field.venue.district}
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
            src={field && field.venue && field.venue.thumbnail}
            style={{ width: "100%", borderRadius: "20px", maxHeight: "600px" }}
          />
          <h5 className="mb-0 pt-4 pb-0">Địa điểm</h5>
          <img
            src="https://malaebapp.com/images/bgLarge.png"
            className="bgImg"
            alt="img"
          ></img>
          <div>
            <Map
              lat={field.venue && parseFloat(field.venue.latitude)}
              lng={field.venue && parseFloat(field.venue.longitude)}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyAB_ahjB8F275QK0oE3zJ2B4G958mUTXIg'}&callback=initMap`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{
                    height: `90vh`,
                    margin: `auto`,
                    border: "2px solid black",
                  }}
                />
              }
              mapElement={<div style={{ height: `100%` }} />}
            /> 
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
              {field.venue && field.venue.phone}
              <br />
              <b>
                <FontAwesomeIcon icon={faClock} />
              </b>{" "}
              {field.venue && field.venue.openTime} -{" "}
              {field.venue && field.venue.closeTime}
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
                  {isCheck &&
                    (isAvailable ? (
                      <div className="mt-2 text-success">
                        Thời gian đã chọn có sẵn
                      </div>
                    ) : (
                      <div className="mt-2 text-danger">
                        Thời gian đã chọn không có sẵn
                      </div>
                    ))}
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
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>
            <Modal
              buttonText="Đặt sân"
              title="Kiểm tra thông tin"
              disabled={isCheckLoading || !isAvailable}
              content={
                <div className="model-content">
                  <p>
                    Người đặt: <i>{fullname}</i>
                  </p>
                  <p>
                    Địa điểm: <i>{field.fieldName}</i>
                  </p>
                  <p>
                    thời gian:{" "}
                    <i>
                      {startDate &&
                        startDate.toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                        })}{" "}
                      ({selectedStartTime && selectedStartTime.format("HH:mm")}{" "}
                      - {selectedEndTime && selectedEndTime.format("HH:mm")})
                    </i>
                  </p>
                  <p>
                    Tổng tiền: <i>{totalPrice()}</i>
                  </p>
                  <p>
                    Ghi chú: <i>{note}</i>
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
      <div
        dangerouslySetInnerHTML={{ __html: field?.venue?.additionalInfo || "" }}
      />
      <div className="reviews mb-3 pt-4">
        <h5 className="mb-0">Đánh giá</h5>
        <img
          src="https://malaebapp.com/images/bgLarge.png"
          className="bgImg"
          alt="img"
        ></img>
        <div className="reviews-list">
          {
            // Display reviews here
            fieldReviews.map((review) => (
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
                        {review?.username}{" "}
                        <span className="float-end fw-normal textSmall">
                          {formatTimeDifference(review.createdDate)}
                        </span>
                      </h5>
                      <p className="textVsmall">
                        {Array(review.rating)
                          .fill()
                          .map(() => (
                            <img
                              src="https://malaebapp.com/images/star.png"
                              width="15"
                              alt="img"
                            />
                          ))}
                      </p>
                    </div>
                  </div>
                  <p>{review.content}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <div className="flex items-center mb-2">
              <StarRating
                rating={selectedRating}
                onStarClick={handleStarClick}
              />
            </div>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full h-20 border rounded p-2 mb-2"
              placeholder="Viết đánh giá của bạn tại đây"
            ></textarea>
            <button
              disabled={!review || !selectedRating}
              className="bg-blue-500 text-white rounded ml-auto py-2 px-4"
              onClick={handleReviewSubmit}
            >
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
