import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../components/Home/'
import Clock from '../components/Clock/'

const MyRoutes = _ => {
  return (
    // <Router basename={process.env.PUBLIC_URL} >
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/clock' element={<Clock />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
