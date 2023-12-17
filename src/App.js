import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Layout from "./layouts/Layout.tsx";
import Home from "./pages/Home.tsx";
import List from "./pages/List.tsx";
import SignIn from "./pages/SignIn.tsx";
import FindTeam from "./pages/FindTeam";
import FindGame from "./pages/FindGame.jsx";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Event from "./pages/Event";
import PaymentBookingPage from "./pages/Payment";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";
import { ToastContainer } from "react-toastify";
import Board from "./pages/Board";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/danh-sach" element={<List />}></Route>
            <Route path="/tim-doi/:id?" element={<FindTeam />}></Route>
            <Route path="/tim-tran" element={<FindGame />}></Route>
            <Route path="/thanh-toan" element={<PaymentBookingPage />}></Route>
            <Route path="/su-kien-cua-toi" element={<Event />} />
            <Route path="/tai-khoan/dang-nhap" element={<SignIn />}></Route>
            <Route path="/tai-khoan/dang-ky" element={<SignUp />}></Route>
            <Route path="/tai-khoan/dang-xuat" element={<SignOut />}></Route>
            <Route path="/tai-khoan/:slug" element={<Profile />} />
            <Route path="/bang-xep-hang" element={<Board />} />
            <Route path="/:url" element={<Detail />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer hideProgressBar={true} autoClose={1500} theme="colored" />
    </>
  );
}

export default App;
