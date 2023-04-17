import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import DistanceSlider from './components/DistanceSlider.tsx'

function App() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <div>
      <Header />
      <div className="sectionFirst">
        <div className="overlay">
          <div className="container pt-5">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 class="text-white fw-bold pt-5">
                  Booking Sport Venues Has Never Been Easier
                </h1>
                <p class="text-white pb-4">Find Fields Near You In Bahrain</p>
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
                <h3 class="text-center">
                  <img
                    class="me-2"
                    src="https://malaebapp.com/images/point.png"
                    alt="img"
                  />{' '}
                  <span class="border-bottom text-uppercase">Filter By</span>{' '}
                  <img
                    class="ms-2"
                    src="https://malaebapp.com/images/point.png"
                    alt="img"
                  />
                </h3>
              </div>
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              />
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <p class="mt-2 mb-1 fw-bold">Time From</p>
                    <select className="form-control text-uppercase">
                      <option>Choose Your Time</option>
                    </select>
                  </div>
                </div>
              </div>
              <p class="fw-bold mt-4 mb-1">Choose Sport</p>
              <div
                class="row pb-4 btnSlot d-md-flex d-none sports_icons"
                dir="ltr"
              >
                <div class="col-4 p-2" title="All Sports">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options-outlined"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-success w-100 active"
                    for="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/0.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div class="col-4 p-2" title="Football">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options-outlined"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-success w-100 "
                    for="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/1.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div class="col-4 p-2" title="Basketball">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options-outlined"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-success w-100 "
                    for="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/2.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div class="col-4 p-2" title="Padel">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options-outlined"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-success w-100 "
                    for="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/3.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div class="col-4 p-2" title="Volleyball">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options-outlined"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-success w-100 "
                    for="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/4.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div class="col-4 p-2" title="Futsal">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options-outlined"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-success w-100 "
                    for="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/8.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <p class="pt-3 mb-1 fw-bold">Match Duration</p>
                <div class="row pb-4 btnSlot d-md-flex d-none" dir="ltr">
                  <div class="col-4">
                    <input
                      type="radio"
                      class="btn-check"
                      name="options-outlined"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-success w-100 "
                      for="success-outlined"
                    >
                      60 Mins
                    </label>
                  </div>
                  <div class="col-4">
                    <input
                      type="radio"
                      class="btn-check"
                      name="options-outlined"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-success w-100 "
                      for="success-outlined2"
                    >
                      90 Mins
                    </label>
                  </div>
                  <div class="col-4">
                    <input
                      type="radio"
                      class="btn-check"
                      name="options-outlined"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-success w-100 "
                      for="success-outlined3"
                    >
                      120 Mins
                    </label>
                  </div>
                  <p class="pt-3 mb-1 fw-bold">Pitch Size</p>
                  <div class="row">
                    <div class="col-4">
                      <input
                        type="checkbox"
                        class="btn-check"
                        name="options-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success w-100 "
                        for="success-outlined1"
                      >
                        5 V 5
                      </label>
                    </div>
                    <div class="col-4">
                      <input
                        type="checkbox"
                        class="btn-check"
                        name="options-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success w-100 "
                        for="success-outlined2"
                      >
                        6 V 6
                      </label>
                    </div>
                    <div class="col-4">
                      <input
                        type="checkbox"
                        class="btn-check"
                        name="options-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success w-100 "
                        for="success-outlined3"
                      >
                        7 V 7
                      </label>
                    </div>
                    <div class="col-4 mt-2">
                      <input
                        type="checkbox"
                        class="btn-check"
                        name="options-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success w-100 "
                        for="success-outlined4"
                      >
                        8 V 8
                      </label>
                    </div>
                    <div class="col-4 mt-2">
                      <input
                        type="checkbox"
                        class="btn-check"
                        name="options-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success w-100 "
                        for="success-outlined5"
                      >
                        9 V 9
                      </label>
                    </div>
                    <div class="col-4 mt-2">
                      <input
                        type="checkbox"
                        class="btn-check"
                        name="options-outlined"
                        autocomplete="off"
                      />
                      <label
                        class="btn btn-outline-success w-100 "
                        for="success-outlined6"
                      >
                        11 V 11
                      </label>
                    </div>
                    <DistanceSlider />
                  </div>
                  <div class="row mt-4">
                    <button class="btn btn-outline-dark btn-lg col mx-1">
                      Clear
                    </button>
                    <button class="btn btn-success btn-lg col mx-1">
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-md-block">
              <div class="card mb-4 cardList d-none d-md-flex clickable">
                <div class="row g-0">
                  <div class="col-md-4 position-relative">
                    <img
                      src="https://cdn.malaebapp.com/images/stadium/78/small"
                      class="card-img-top"
                      alt="null"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5>
                        Soccer World
                        <span class="float-end stars">
                          <i class="fa fa-star"></i> 4.3/5
                        </span>
                      </h5>
                      <p>
                        <small title="Bahrain, Riffa - Southern Governorate">
                          Riffa Alshamali, Riffa, Bahrain
                        </small>
                        <small
                          class="badge badge-dark label-dark mx-1 p-1 text-black-50"
                        >
                          2.26 KM Away
                        </small>
                      </p>
                      <h6 class="d-none d-md-block">
                        2 Pitches
                        <span class="badge text-dark border mx-1 p-0 px-1 p-1">
                          <img
                            src="https://malaebapp.com/images/sports/1.png"
                            width="20"
                            alt="img"
                          />{' '}
                          7 v 7
                        </span>
                        <span class="badge text-dark border mx-1 p-0 px-1 p-1">
                          <img
                            src="https://malaebapp.com/images/sports/1.png"
                            width="20"
                            alt="img"
                          />{' '}
                          7 v 7
                        </span>
                      </h6>
                      <button class="btn btnBook w-100 d-none d-md-block">
                        Book From <span class="textG">25$</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div>
          <h3 class="text-center">
            <img
              class="me-2"
              src="https://malaebapp.com/images/point.png"
              alt="img"
            />{' '}
            Browse Stadiums By Sport{' '}
            <img
              class="ms-2"
              src="https://malaebapp.com/images/point.png"
              alt="img"
            />
          </h3>
          <div className="row justify-content-center pt-5">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div class="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/0.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div class="flex-grow-1 mx-3 pt-1">
                      <h5>All Sports</h5>
                      <p>400 Stadiums</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div class="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/0.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div class="flex-grow-1 mx-3 pt-1">
                      <h5>All Sports</h5>
                      <p>400 Stadiums</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div class="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/0.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div class="flex-grow-1 mx-3 pt-1">
                      <h5>All Sports</h5>
                      <p>400 Stadiums</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div class="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/0.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div class="flex-grow-1 mx-3 pt-1">
                      <h5>All Sports</h5>
                      <p>400 Stadiums</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div class="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/0.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div class="flex-grow-1 mx-3 pt-1">
                      <h5>All Sports</h5>
                      <p>400 Stadiums</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3 clickable">
              <div className="card cardPlayground">
                <div className="card-body">
                  <div className="d-flex">
                    <div class="flex-shrink-0">
                      <img
                        src="https://malaebapp.com/images/sports/0.png"
                        width="60"
                        alt="..."
                      />
                    </div>
                    <div class="flex-grow-1 mx-3 pt-1">
                      <h5>All Sports</h5>
                      <p>400 Stadiums</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <h3 class="text-center">
          <img
            class="me-2"
            src="https://malaebapp.com/images/point.png"
            alt="img"
          />{' '}
          Book Your Game Within Minutes{' '}
          <img
            class="ms-2"
            src="https://malaebapp.com/images/point.png"
            alt="img"
          />
        </h3>
        <div class="row justify-content-around pt-5">
          <div class="col-lg-3 col-md-3 sm-6 text-md-center text-lg-center mb-3">
            <div class="d-md-block d-flex">
              <div class="bgImage">
                <img
                  src="https://malaebapp.com/images/Position.png"
                  class="img-fluid mx-auto d-block imageFixedHeight"
                  alt="img"
                />
              </div>
              <div>
                <h3 class="fw-bold pt-4 pt-lg-3">Find</h3>
                <p class="textSmall">A nearby Stadium</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 sm-6 text-md-center text-lg-center mb-3">
            <div class="d-md-block d-flex">
              <div class="bgImage">
                <img
                  src="https://malaebapp.com/images/calendar.png"
                  class="img-fluid mx-auto d-block imageFixedHeight"
                  alt="img"
                />
              </div>
              <div>
                <h3 class="fw-bold pt-4 pt-lg-3">Select</h3>
                <p class="textSmall">Date, time, duration and pitch size</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 sm-6 text-md-center text-lg-center mb-3">
            <div class="d-md-block d-flex">
              <div class="bgImage">
                <img
                  src="https://malaebapp.com/images/Creditcard.png"
                  class="img-fluid mx-auto d-block imageFixedHeight"
                  alt="img"
                />
              </div>
              <div>
                <h3 class="fw-bold pt-4 pt-lg-3">Pay</h3>
                <p class="textSmall">The booking amount online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
