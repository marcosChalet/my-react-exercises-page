import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../components/Home/'

const MyRoutes = _ => {
  return (
    // <Router basename={process.env.PUBLIC_URL} >
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
