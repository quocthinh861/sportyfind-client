import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DistanceSlider from "../components/DistanceSlider.tsx";

function List() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="sectionFirst">
        <div className="overlay">
          <div className="container pt-5">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 className="text-white fw-bold pt-5">
                  Booking Sport Venues Has Never Been Easier
                </h1>
                <p className="text-white pb-4">
                  Find Fields Near You In Bahrain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="topStaduims pb-4">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="d-none d-md-block">
                <h3 className="text-center">
                  <img
                    className="me-2"
                    src="https://malaebapp.com/images/point.png"
                    alt="img"
                  />{" "}
                  <span className="border-bottom text-uppercase">
                    Filter By
                  </span>{" "}
                  <img
                    className="ms-2"
                    src="https://malaebapp.com/images/point.png"
                    alt="img"
                  />
                </h3>
              </div>
              <p className="mt-2 mb-1 fw-bold">Date</p>
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
                    <p className="mt-2 mb-1 fw-bold">Time From</p>
                    <select className="form-control text-uppercase">
                      <option>Choose Your Time</option>
                    </select>
                  </div>
                </div>
              </div>
              <p className="fw-bold mt-4 mb-1">Choose Sport</p>
              <div
                className="row pb-4 btnSlot d-md-flex d-none sports_icons"
                dir="ltr"
              >
                <div className="col-4 p-2" title="All Sports">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success w-100 active"
                    htmlFor="success-outlined"
                  >
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
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success w-100 "
                    htmlFor="success-outlined"
                  >
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
                  />
                  <label
                    className="btn btn-outline-success w-100 "
                    htmlFor="success-outlined"
                  >
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
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success w-100 "
                    htmlFor="success-outlined"
                  >
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
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success w-100 "
                    htmlFor="success-outlined"
                  >
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
                  />
                  <label
                    className="btn btn-outline-success w-100 "
                    htmlFor="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/8.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <p className="pt-3 mb-1 fw-bold">Match Duration</p>
                <div className="row pb-4 btnSlot d-md-flex d-none" dir="ltr">
                  <div className="col-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-success w-100 "
                      htmlFor="success-outlined"
                    >
                      60 Mins
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-success w-100 "
                      htmlFor="success-outlined2"
                    >
                      90 Mins
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-success w-100 "
                      htmlFor="success-outlined3"
                    >
                      120 Mins
                    </label>
                  </div>
                  <p className="pt-3 mb-1 fw-bold">Pitch Size</p>
                  <div className="row">
                    <div className="col-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined1"
                      >
                        5 V 5
                      </label>
                    </div>
                    <div className="col-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined2"
                      >
                        6 V 6
                      </label>
                    </div>
                    <div className="col-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined3"
                      >
                        7 V 7
                      </label>
                    </div>
                    <div className="col-4 mt-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined4"
                      >
                        8 V 8
                      </label>
                    </div>
                    <div className="col-4 mt-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined5"
                      >
                        9 V 9
                      </label>
                    </div>
                    <div className="col-4 mt-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined6"
                      >
                        11 V 11
                      </label>
                    </div>
                    <DistanceSlider />
                  </div>
                  <div className="row mt-4">
                    <button className="btn btn-outline-dark btn-lg col mx-1">
                      Clear
                    </button>
                    <button className="btn btn-success btn-lg col mx-1">
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-md-block">
              <div className="card mb-4 cardList d-none d-md-flex clickable">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <img
                      src="https://cdn.malaebapp.com/images/stadium/78/small"
                      className="card-img-top"
                      alt="null"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        Soccer World
                        <span className="float-end stars">
                          <i className="fa fa-star"></i> 4.3/5
                        </span>
                      </h5>
                      <p>
                        <small title="Bahrain, Riffa - Southern Governorate">
                          Riffa Alshamali, Riffa, Bahrain
                        </small>
                        <small className="badge badge-dark label-dark mx-1 p-1 text-black-50">
                          2.26 KM Away
                        </small>
                      </p>
                      <h6 className="d-none d-md-block">
                        2 Pitches
                        <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                          <img
                            src="https://malaebapp.com/images/sports/1.png"
                            width="20"
                            alt="img"
                          />{" "}
                          7 v 7
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
                      <button className="btn btnBook w-100 d-none d-md-block">
                        Booking now <span className="textG">25$</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4 cardList d-none d-md-flex clickable">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <img
                      src="https://cdn.malaebapp.com/images/stadium/78/small"
                      className="card-img-top"
                      alt="null"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        Soccer World
                        <span className="float-end stars">
                          <i className="fa fa-star"></i> 4.3/5
                        </span>
                      </h5>
                      <p>
                        <small title="Bahrain, Riffa - Southern Governorate">
                          Riffa Alshamali, Riffa, Bahrain
                        </small>
                        <small className="badge badge-dark label-dark mx-1 p-1 text-black-50">
                          2.26 KM Away
                        </small>
                      </p>
                      <h6 className="d-none d-md-block">
                        2 Pitches
                        <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                          <img
                            src="https://malaebapp.com/images/sports/1.png"
                            width="20"
                            alt="img"
                          />{" "}
                          7 v 7
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
                      <button className="btn btnBook w-100 d-none d-md-block">
                        Booking no
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4 cardList d-none d-md-flex clickable">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <img
                      src="https://cdn.malaebapp.com/images/stadium/78/small"
                      className="card-img-top"
                      alt="null"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        Soccer World
                        <span className="float-end stars">
                          <i className="fa fa-star"></i> 4.3/5
                        </span>
                      </h5>
                      <p>
                        <small title="Bahrain, Riffa - Southern Governorate">
                          Riffa Alshamali, Riffa, Bahrain
                        </small>
                        <small className="badge badge-dark label-dark mx-1 p-1 text-black-50">
                          2.26 KM Away
                        </small>
                      </p>
                      <h6 className="d-none d-md-block">
                        2 Pitches
                        <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                          <img
                            src="https://malaebapp.com/images/sports/1.png"
                            width="20"
                            alt="img"
                          />{" "}
                          7 v 7
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
                      <button className="btn btnBook w-100 d-none d-md-block">
                        Booking now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4 cardList d-none d-md-flex clickable">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <img
                      src="https://cdn.malaebapp.com/images/stadium/78/small"
                      className="card-img-top"
                      alt="null"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        Soccer World
                        <span className="float-end stars">
                          <i className="fa fa-star"></i> 4.3/5
                        </span>
                      </h5>
                      <p>
                        <small title="Bahrain, Riffa - Southern Governorate">
                          Riffa Alshamali, Riffa, Bahrain
                        </small>
                        <small className="badge badge-dark label-dark mx-1 p-1 text-black-50">
                          2.26 KM Away
                        </small>
                      </p>
                      <h6 className="d-none d-md-block">
                        2 Pitches
                        <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                          <img
                            src="https://malaebapp.com/images/sports/1.png"
                            width="20"
                            alt="img"
                          />{" "}
                          7 v 7
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
                      <button className="btn btnBook w-100 d-none d-md-block">
                        Booking now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
