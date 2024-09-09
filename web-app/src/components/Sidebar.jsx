import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="col-md-2 sidebar">
        <p className="h2 text-light mt-3 ms-3 text-center">UB Cafeteria</p>
        <br />
        <br />
        <nav className="nav flex-column ms-3 mt-4">
            <Link className="nav-link text-light h3" to="/dashboard">Dashboard</Link>
            <hr/>
            <div>
            <Link className="nav-link text-light h3" to="/cafeterias">Cafeterias</Link>
            <nav className="nav flex-column ms-3">
                <Link className="nav-link text-light h5" to="/cafeteria/1">Cherry Cafeteria</Link>
                <Link className="nav-link text-light h5" to="/cafeteria/2">Chic Cafeteria</Link>
                <Link className="nav-link text-light h5" to="/cafeteria/3">Zen Cafeteria</Link>
                <Link className="nav-link text-light h5" to="/cafeteria/add">Add... </Link>
            </nav>
            </div>
            <hr/>
            <Link className="nav-link text-light h3" to="/concessionaires">Concessionaires</Link>
            <hr />
            <Link className="nav-link text-light h3" to="/customers">Customers</Link>
            <hr />
            <Link className="nav-link text-light h3" to="/reports">Reports</Link>
            <hr />
        </nav>
    </div>
  )
}

export default Sidebar