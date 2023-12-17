import {
  faBell,
  faClock,
  faCode,
  faFutbol,
  faSearch,
  faUnlockAlt,
  faUserCircle,
  faRankingStar
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table, { AvatarCell } from "../components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Spinner } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Booking from "../components/Booking";
import Account from "../components/Account";
import CreateTeam from '../components/CreateTeam'
import footballplayer from "../assets/images/football-player.png";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
const menu = [
  {
    id: 1,
    name: "Thông tin tài khoản",
    icon: faUserCircle,
    link: "/tai-khoan/thong-tin-tai-khoan",
  },
  {
    id: 2,
    name: "Lịch đặt của tôi",
    icon: faClock,
    link: "/tai-khoan/lich-su-dat-cua-toi",
  },
  {
    id: 3,
    name: "Tham gia đội bóng",
    icon: faFutbol,
    link: "/tim-doi",
  },
  {
    id: 4,
    name: "Lập kèo",
    icon: faRankingStar,
    link: "/tim-tran",
  },
  {
    id: 5,
    name: "Sự kiện sắp tới",
    icon: faBell,
    link: "/su-kien-cua-toi",
  },
  {
    id: 6,
    name: "Đổi mật khẩu",
    icon: faUnlockAlt,
    link: "/tai-khoan/doi-mat-khau",
  },
];

function Profile() {
  // const axiosPrivate = useAxiosPrivate();
  const location = useLocation();
  const {slug} =  useParams();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const name = user.data?.user?.username;
  let content = null;

  if (slug === "thong-tin-tai-khoan") {
    content = <Account />;
  } else if (slug === "lich-su-dat-cua-toi") {
    content = <Booking />;
  } else if(slug === "") {
    content = <CreateTeam />;
  } else if(slug === "tham-gia-doi-bong") {
    navigate("/tim-doi");
  }

  // const [bookingList, setBookingList] = React.useState([]);
  // const [beginDate, setBeginDate] = React.useState(
  //   new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
  // );
  // const [endDate, setEndDate] = React.useState(
  //   new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  // );
  // const [isLoading, setIsLoading] = React.useState(false);

  // const handleSearch = (e) => {
  //   e.preventDefault();

  //   var startDateFormatted = beginDate.toLocaleDateString("en-US", {
  //     month: "2-digit",
  //     day: "2-digit",
  //     year: "numeric",
  //   });

  //   var endDateFormatted = endDate.toLocaleDateString("en-US", {
  //     month: "2-digit",
  //     day: "2-digit",
  //     year: "numeric",
  //   });

  //   var query = {
  //     beginDate: startDateFormatted,
  //     endDate: endDateFormatted,
  //     customerId: 1,
  //     fieldId: 2,
  //   };

  //   setIsLoading(true);
  //   axiosPrivate.post("/booking/searchBooking", query).then((res) => {
  //     if (res.status === 200) {
  //       setTimeout(() => {
  //         setIsLoading(false);
  //         var bookingList = res.data.result.map((booking) => {
  //           return {
  //             id: booking.bookingId,
  //             date: booking.bookingDate,
  //             time: `${booking.startTime} - ${booking.endTime}`,
  //             status: booking.bookingStatus,
  //             venue: booking.fieldName,
  //             price: booking.price,
  //           };
  //         });
  //         setBookingList(bookingList);
  //       }, 1000);
  //     }
  //   });
  // };

  // useEffect(() => {

  //   axiosPrivate
  //     .get("/booking/getBookingListByCustomerId", {
  //       params: {
  //         customerId: 1,
  //       },
  //     })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         var bookingList = res.data.result.map((booking) => {
  //           return {
  //             id: booking.bookingId,
  //             date: booking.bookingDate,
  //             time: `${booking.startTime} - ${booking.endTime}`,
  //             status: booking.bookingStatus,
  //             venue: booking.fieldName,
  //             price: booking.price,
  //           };
  //         });

  //         console.log(bookingList);

  //         setBookingList(bookingList);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: "ID",
  //       accessor: "id",
  //     },
  //     {
  //       Header: "Ngày",
  //       accessor: "date",
  //     },
  //     {
  //       Header: "Thời gian",
  //       accessor: "time",
  //     },
  //     {
  //       Header: "Trạng thái",
  //       accessor: "status",
  //     },
  //     {
  //       Header: "Đia điểm",
  //       accessor: "venue",
  //     },
  //     {
  //       Header: "",
  //       accessor: "action",
  //       Cell: ({ row }) => (
  //         <>
  //           <Button className="btn btn-danger btn-sm">Hủy</Button>
  //           <Button className="btn btn-primary ml-1 btn-sm">Thanh toán</Button>
  //         </>
  //       ),
  //     },
  //   ],
  //   [bookingList]
  // );

  return (
    <div className="container profile mx-auto lg:px-5 pt-3 pb-3 border-b px-3 lg:px-0">
      <div className="row justify-content-md-center mt-3 minimum-heigh">
        <div className="col-md-3 col-lg-3 text-center pl-0 pr-0">
          <div className="dropdown user-sidebar sidebar-md text-center">
            <ul className="dropdown-menu" aria-labelledby="user_sidenave">
              <li className="dropdown-header">
                <div className="user-brief justify-content-center">
                  <a className="user-brief_avatar m-1" href="#">
                    <div className="sporta-avatar">
                      <img
                        id="avatar"
                        src={user?.data?.user?.thumbnail || footballplayer}
                      />
                    </div>
                  </a>
                  <div className="d-flex flex-column align-self-center user-brief_right m-md-1">
                    <div className="user-brief-name text-muted">{name}</div>
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
                    <li
                      className={`menu-item mb-1 ${
                        location.pathname == item.link ? "active" : ""
                      }`}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-md-9 col-lg-9 pl-3 pr-3">
          {/* <Booking /> */}
          {content}
        </div>
      </div>
      <ToastContainer hideProgressBar={true} autoClose={1500} theme="colored" />
    </div>
  );
}

export default Profile;
