import {
  faBell,
  faClock,
  faCode,
  faFutbol,
  faSearch,
  faUnlockAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Table, { AvatarCell } from '../components/Table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

function Profile() {
  const products = [
    {
      id: 1,
      name: "Product A",
      description: "Description for Product A",
      price: 100000,
      discounted_price: 10,
      imgUrl: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Product B",
      description: "Description for Product B",
      price: 200000,
      discounted_price: 20,
      imgUrl: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Product C",
      description: "Description for Product C",
      price: 300000,
      discounted_price: 30,
      imgUrl: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Product D",
      description: "Description for Product D",
      price: 400000,
      discounted_price: 40,
      imgUrl: "https://via.placeholder.com/50",
    },
  ];

    // mock data for booking requests table
    const bookingRequests = [
      {
        id: 1,
        date: "02/04/2023",
        time: "09:00 - 10:00",
        status: "new",
        facility: "Sân tennis A",
        location: "Quận 1",
      },
      {
        id: 2,
        date: "02/05/2023",
        time: "14:00 - 15:00",
        status: "done",
        facility: "Sân bóng đá B",
        location: "Quận 2",
      },
    ];
  
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Time",
        accessor: "time",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Facility",
        accessor: "facility",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <Button className="btn btn-danger btn-sm">
            Hủy
          </Button>
        ),
      }
    ],
    [bookingRequests]
  );
  return (
    <div className="container mx-auto lg:px-5 pt-3 pb-3 border-b px-3 lg:px-0">
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
                  <li className="mb-1 ">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <a href="/user/profile">Thông tin tài khoản</a>
                  </li>
                  <li className="mb-1 ">
                    <FontAwesomeIcon icon={faFutbol} />
                    <a href="/sport_profile">Hồ sơ thể thao</a>
                  </li>
                  <li className="mb-1 active">
                    <FontAwesomeIcon icon={faClock} />
                    <a href="/user/booking_requests">Lịch đặt của tôi</a>
                  </li>
                  <li className="mb-1 ">
                    <FontAwesomeIcon icon={faBell} />
                    <a href="/user/announcements">Thông báo</a>
                  </li>
                  <li className="mb-1 ">
                    <FontAwesomeIcon icon={faCode} />
                    <a href="/user/referral_code">Mã giới thiệu</a>
                  </li>
                  <li className="mb-1 ">
                    <FontAwesomeIcon icon={faUnlockAlt} />
                    <a href="/user/password">Đổi mật khẩu</a>
                  </li>
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
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="begin_date"
                        name="begin_date"
                        className="datepicker datepicker-begin form-control"
                        data-provide="datepicker"
                        defaultValue="02/04/2023"
                      />
                    </InputGroup>
                  </Col>
                  <Col xl={3} md={3} mb={4}>
                    <Form.Label htmlFor="end_date">Đến ngày</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="end_date"
                        name="end_date"
                        className="datepicker datepicker-end form-control"
                        data-provide="datepicker"
                        defaultValue="02/05/2023"
                      />
                    </InputGroup>
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
              <Table columns={columns} data={bookingRequests} />
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

              <div className="row justify-content-center m-4">
                <p style={{ textAlign: "center" }}>Không có dữ liệu. </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
