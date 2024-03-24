import React from 'react'
import { Routes, Route } from 'react-router-dom'
import WelcomePage from '../pages/welcomePage'

function MainRouter() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
    </Routes>
  )
}

export default MainRouter
