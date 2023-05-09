import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import Layout from './layouts/Layout.tsx'
import Home from './pages/Home.tsx'
import List from './pages/List.tsx'
import SignIn from './pages/SignIn.tsx'
import FindTeam from './pages/FindTeam.tsx'
import Detail from './pages/Detail'
import Profile from './pages/Profile'

function App() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/san-bong-thien-tan" element={<Detail />}></Route>
          <Route path="/find-team" element={<FindTeam />}></Route>
          <Route path="/tai-khoan/dang-nhap" element={<SignIn />}></Route>
          <Route path="/tai-khoan/lich-su-dat-cua-toi" element={<Profile />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
