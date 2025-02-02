import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DetailPage from './components/DetailPage'
import SavedItems from './components/SavedItems'
import AdminHome from './admin/AdminHome'
import EventCreate from './admin/EventCreate'

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/card/:id' element={<DetailPage  />}/>
        <Route path="/saved" element={<SavedItems />} />
        <Route path='/admin/home' element={<AdminHome/>}/>
        <Route path='/admin/event/create' element={<EventCreate/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App