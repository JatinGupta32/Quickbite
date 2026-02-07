import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import ExploreFood from './pages/ExploreFood/ExploreFood'
import Menubar from './components/Menubar/Menubar'
import { ToastContainer } from "react-toastify";
import FoodDetails from './pages/FoodDetails/FoodDetails';

const App = () => {
  return (
    <div>
      <Menubar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<ExploreFood />} />
        <Route path="/food/:id" element={<FoodDetails />} />
      </Routes>
    </div>
  )
}

export default App