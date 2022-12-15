import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../components/Home/'
import Counter from '../components/Counter/'

const AppRoutes = _ => {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
