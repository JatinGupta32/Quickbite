import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListFood from './pages/ListFood/ListFood'
import Sidebar from './components/Sidebar/Sidebar'
import Menubar from './components/Menubar/Menubar'
import AddFood from './pages/AddFood/AddFood'
import Orders from './pages/Orders/Orders';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="d-flex" id="wrapper">
            {/* Sidebar */}
            <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar}/>

            {/* Page content wrapper */}
            <div id="page-content-wrapper">
                {/* Top navigation*/}
                <Menubar toggleSidebar={toggleSidebar}/>
                <ToastContainer />

                {/* Page content */}
                <div className="container-fluid">
                    <Routes>
                      <Route path='/add' element={<AddFood />}></Route>
                      <Route path='/list' element={<ListFood />}></Route>
                      <Route path='/orders' element={<Orders />}></Route>
                      <Route path='/' element={<ListFood />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
  )
}

export default App