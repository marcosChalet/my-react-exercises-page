import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../components/Home/'
import Counter1 from '../components/Counter1/'
import Counter2 from '../components/Counter2/'
import Counter3 from '../components/Counter3/'

const AppRoutes = _ => {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/counter-1' element={<Counter1 />} />
        <Route exact path='/counter-2' element={<Counter2 />} />
        <Route exact path='/counter-3' element={<Counter3 />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
