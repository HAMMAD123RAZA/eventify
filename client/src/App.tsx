import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DetailPage from './components/DetailPage'
// import SavedItems from './components/SavedItems'
import AdminHome from './admin/AdminHome'
import EventCreate from './admin/EventCreate'
import EventList from './admin/EventList'
import Login from './components/Login'
import Register from './components/Register'
import SavedItems from './components/SavedItems'

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/card/:id' element={<DetailPage  />}/>
        <Route path="/saved" element={<SavedItems />} />
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/admin/event/create' element={<EventCreate/>}/>
        <Route path='/admin/event/list' element={<EventList/>}/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/user/register' element={<Register/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App