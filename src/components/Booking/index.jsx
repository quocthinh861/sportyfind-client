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
import Table, { AvatarCell } from "../../components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import CreateGameMatch from "../CreateGame";

function Account() {
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
  const [createGame, setCreateGame] = React.useState(null);
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
          console.log("thinh", res);
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
        Header: "",
        accessor: "action",
        Cell: ({ row }) => (
          <>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Action
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Hủy</Dropdown.Item>
                <Dropdown.Item>Thanh toán</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setCreateGame(<CreateGameMatch bookingInfo={row.values} />);
                  }}
                >
                  Tạo trận đấu
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ),
      },
    ],
    [bookingList]
  );
  return (
    <>
      {createGame ? (
        createGame
      ) : (
        <>
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
        </>
      )}
    </>
  );
}

export default Account;
