import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Cafeteria() {
  return (
    <div className='row vh-100'>
    <Sidebar />
    <div className="col-md-10 mt-4">
        <Navbar />
        <p className="h1 mt-3">Cherry Cafeteria</p>
        <br />

        <p className="h3 mt-3">Concessions</p>
        <hr />
        <br />
        
        
    </div>
  </div>
  )
}

export default Cafeteria