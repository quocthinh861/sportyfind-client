import {
  faBell,
  faClock,
  faCode,
  faFutbol,
  faSearch,
  faUnlockAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table, { AvatarCell } from "../components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const menu = [
  {
    id: 1,
    name: "Thông tin tài khoản",
    icon: faUserCircle,
    link: "/tai-khoan/thong-tin-tai-khoan",
  },
  {
    id: 2,
    name: "Hồ sơ thể thao",
    icon: faFutbol,
    link: "/tai-khoan/ho-so-the-thao",
  },
  {
    id: 3,
    name: "Lịch đặt của tôi",
    icon: faClock,
    link: "/tai-khoan/lich-su-dat-cua-toi",
  },
  {
    id: 4,
    name: "Thông báo",
    icon: faBell,
    link: "/tai-khoan/thong-bao",
  },
  {
    id: 5,
    name: "Mã giới thiệu",
    icon: faCode,
    link: "/tai-khoan/ma-gioi-thieu",
  },
  {
    id: 6,
    name: "Đổi mật khẩu",
    icon: faUnlockAlt,
    link: "/tai-khoan/doi-mat-khau",
  },
];

function Profile() {
  const axiosPrivate = useAxiosPrivate();
  const location = useLocation();

  const [bookingList, setBookingList] = React.useState([]);
  const [beginDate, setBeginDate] = React.useState(
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = React.useState(
    new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  );
  const [isLoading, setIsLoading] = React.useState(false);

  console.log(location.pathname)

  const handleSearch = (e) => {
    e.preventDefault();

    var startDateFormatted = beginDate.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    var endDateFormatted = endDate.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    var query = {
      beginDate: startDateFormatted,
      endDate: endDateFormatted,
      customerId: 1,
      fieldId: 2,
    };

    setIsLoading(true);
    axiosPrivate.post("/booking/searchBooking", query).then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          setIsLoading(false);
          var bookingList = res.data.result.map((booking) => {
            return {
              id: booking.bookingId,
              date: booking.bookingDate,
              time: `${booking.startTime} - ${booking.endTime}`,
              status: booking.bookingStatus,
              venue: booking.fieldName,
              price: booking.price,
            };
          });
          setBookingList(bookingList);
        }, 1000);
      }
    });
  };

  useEffect(() => {
    axiosPrivate
      .get("/booking/getBookingListByCustomerId", {
        params: {
          customerId: 1,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          var bookingList = res.data.result.map((booking) => {
            return {
              id: booking.bookingId,
              date: booking.bookingDate,
              time: `${booking.startTime} - ${booking.endTime}`,
              status: booking.bookingStatus,
              venue: booking.fieldName,
              price: booking.price,
            };
          });

          console.log(bookingList);

          setBookingList(bookingList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Ngày",
        accessor: "date",
      },
      {
        Header: "Thời gian",
        accessor: "time",
      },
      {
        Header: "Trạng thái",
        accessor: "status",
      },
      {
        Header: "Đia điểm",
        accessor: "venue",
      },
      {
        Header: "Giá tiền",
        accessor: "price",
      },
      {
        Header: "",
        accessor: "action",
        Cell: ({ row }) => (
          <Button className="btn btn-danger btn-sm">Hủy</Button>
        ),
      },
    ],
    [bookingList]
  );
  return (
    <div className="container profile mx-auto lg:px-5 pt-3 pb-3 border-b px-3 lg:px-0">
      <div className="row justify-content-md-center mt-3 minimum-heigh">
        <div className="col-md-4 col-lg-4 text-center pl-0 pr-0">
          <div className="dropdown user-sidebar sidebar-md text-center">
            <ul className="dropdown-menu" aria-labelledby="user_sidenave">
              <li className="dropdown-header">
                <div className="user-brief justify-content-center">
                  <a className="user-brief_avatar m-1" href="#">
                    <div className="sporta-avatar">
                      <img
                        id="avatar"
                        src="https://www.sporta.vn/assets/default_user_image-dc0209ffeabf7fa68fcbc7d512a6ceeb051ad3fb16706d26679cccdcf3384043.png"
                      />
                    </div>
                  </a>
                  <div className="d-flex flex-column align-self-center user-brief_right m-md-1">
                    <div className="user-brief-name text-muted">Thịnh Đặng</div>
                    <div className="text-muted text-sm d-none d-md-flex">
                      <a className="text-decoration-none" href="/user/profile">
                        <i className="far fa-edit"></i> Sửa hồ sơ
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <div className="_border d-none d-md-block"></div>
              <div className="row justify-content-center">
                <div className="m-2 col-lg-7 col-7 menu-items">
                  {menu.map((item) => (
                    <li className={`menu-item mb-1 ${location.pathname == item.link ? 'active' : ''}`}>
                      <FontAwesomeIcon icon={item.icon} />
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-md-8 col-lg-8 pl-3 pr-3">
          <div className="user-page-content">
            <section className="border-light">
              <div className="row justify-content-center m-2">
                <h5
                  className="w-100 text-center d-none d-md-block"
                  style={{ fontWeight: 700 }}
                >
                  Lịch Đặt
                </h5>
              </div>
              <Form action="/user/booking_requests" autoComplete="off">
                <Row className="pl-md-2">
                  <Col xl={3} md={3} mb={4}>
                    <Form.Label htmlFor="form_guests">Trạng thái</Form.Label>
                    <Form.Select
                      id="form_guests"
                      name="status"
                      data-style="btn-selectpicker"
                      title=" "
                      className="form-control"
                    >
                      <option value="all" selected="">
                        Tất cả
                      </option>
                      <option value="new">Mới/Đã xác nhận</option>
                      <option value="pending">Chờ xác nhận</option>
                      <option value="done">Đã qua/Hoàn thành</option>
                      <option value="cancelled">Đã hủy</option>
                    </Form.Select>
                  </Col>
                  <Col xl={3} md={3} mb={4}>
                    <Form.Label htmlFor="begin_date">Từ ngày</Form.Label>
                    <DatePicker
                      selected={beginDate}
                      onChange={(date) => {
                        setBeginDate(date);
                      }}
                      calendarClassName="custom-calendar" // add a custom CSS class to the calendar container
                      className="custom-datepicker" // add a custom CSS class to the date-picker container
                      dayClassName={(date) =>
                        date.getTime() === beginDate.getTime()
                          ? "custom-selected"
                          : undefined
                      } // add a custom CSS class to the selected date element
                      showMonthYearPicker={false} // disable month and year picker
                      dateFormat={"dd/MM/yyyy"}
                    />
                  </Col>
                  <Col xl={3} md={3} mb={4}>
                    <Form.Label htmlFor="end_date">Đến ngày</Form.Label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => {
                        setEndDate(date);
                      }}
                      calendarClassName="custom-calendar" // add a custom CSS class to the calendar container
                      className="custom-datepicker" // add a custom CSS class to the date-picker container
                      dayClassName={(date) =>
                        date.getTime() === endDate.getTime()
                          ? "custom-selected"
                          : undefined
                      } // add a custom CSS class to the selected date element
                      showMonthYearPicker={false} // disable month and year picker
                      dateFormat={"dd/MM/yyyy"}
                    />
                  </Col>
                  <Col
                    sm={3}
                    mb={4}
                    order={{ sm: 1, md: 2 }}
                    className="d-flex flex-column"
                  >
                    <div className="mt-auto">
                      <Button
                        type="submit"
                        className="btn btn-green"
                        onClick={handleSearch}
                        style={{
                          backgroundColor: "#85c240",
                          borderColor: "#85c240",
                        }}
                      >
                        <FontAwesomeIcon icon={faSearch} />
                        Tìm kiếm
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
              {isLoading ? (
                <>
                  <div className="mt-4 w-full text-center">
                    <Spinner
                      animation="border"
                      role="status"
                      variant="primary"
                      style={{ width: "1.5rem", height: "1.5rem" }}
                    >
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                </>
              ) : (
                <>
                  <Table columns={columns} data={bookingList} />
                </>
              )}
              {/* <div className="table-responsive mt-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Ngày</th>
                      <th>Thời gian</th>
                      <th>Trạng thái</th>
                      <th>Địa điểm</th>
                      <th>Sân thể thao</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingRequests.map((booking) => (
                      <tr key={booking.id}>
                        <td>{booking.id}</td>
                        <td>{booking.date}</td>
                        <td>{booking.time}</td>
                        <td>{booking.status}</td>
                        <td>{booking.location}</td>
                        <td>{booking.facility}</td>
                        <td>
                          {booking.status !== "cancelled" && (
                            <button className="btn btn-smbtn-danger">Hủy</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {bookingRequests.length === 0 && (
                <div className="row justify-content-center m-4">
                  <p style={{ textAlign: "center" }}>Không có dữ liệu. </p>
                </div>
              )} */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
