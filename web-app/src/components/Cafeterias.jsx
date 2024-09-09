import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Cafeterias() {
  return (
    <div className='row vh-100 bg-lightgray'>
    <Sidebar />
    <div className="col-md-10">
        <Navbar />
        <p className="text-color-indian-red h1 mt-3">Cafeterias</p>
        <br />
        
        <table class="table" style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Cafeteria Name</th>
                <th scope="col">Head</th>
                <th scope="col">Location</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Cherry Cafeteria</td>
                <td>John Sams</td>
                <td>Building F</td>
                <td>
                    <Link to="/cafeteria/1" className="btn btn-danger bi bi-eye-fill"> View</Link>
                    <button type="button" class="btn btn-danger ms-1 bi bi-pencil-square"> Edit</button>
                    <button type="button" class="btn btn-danger ms-1 bi bi-trash-fill"> Delete</button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Chic Cafeteria</td>
                <td>Thomas Thornton</td>
                <td>Building H</td>
                <td>
                    <Link to="/cafeteria" className="btn btn-danger bi bi-eye-fill"> View</Link>
                    <button type="button" class="btn btn-danger ms-1 bi bi-pencil-square"> Edit</button>
                    <button type="button" class="btn btn-danger ms-1 bi bi-trash-fill"> Delete</button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Zen Cafetria</td>
                <td>Billy Kid</td>
                <td>Building B</td>
                <td>
                    <Link to="/cafeteria" className="btn btn-danger bi bi-eye-fill"> View</Link>
                    <button type="button" class="btn btn-danger ms-1 bi bi-pencil-square"> Edit</button>
                    <button type="button" class="btn btn-danger ms-1 bi bi-trash-fill"> Delete</button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
  )
}

export default Cafeterias