import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Switch from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import DistanceSlider from './components/DistanceSlider.tsx'
import Layout from './layouts/Layout.tsx'
import Home from './pages/Home.tsx'
import List from './pages/List.tsx'
import SignIn from './pages/SignIn.tsx'
import FindTeam from './pages/FindTeam.tsx'
import Detail from './pages/Detail.tsx'
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
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/find-team" element={<FindTeam />}></Route>
          <Route path="/users/sign-in" element={<SignIn />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
