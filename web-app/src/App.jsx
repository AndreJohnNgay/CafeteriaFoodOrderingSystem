import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Login'
import Cafeterias from './components/Cafeterias'
import Concessionaires from './components/Concessionaires'
import Customers from './components/Customers'
import Reports from './components/Reports'
import Cafeteria from './components/Cafeteria';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/cafeterias' element={<Cafeterias />}></Route>
          <Route path='/cafeteria/1' element={<Cafeteria />}></Route>
          <Route path='/concessionaires' element={<Concessionaires />}></Route>
          <Route path='/customers' element={<Customers />}></Route>
          <Route path='/reports' element={<Reports />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
