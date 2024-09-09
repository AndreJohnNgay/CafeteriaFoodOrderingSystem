import React from 'react'
import Sidebar from './Sidebar'
import { useState } from 'react'

function Concessionaires() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');

    return (
        <div className='row vh-100'>
        <Sidebar />
        <div className="col-md-10 mt-4">
          Concesssionaires
        </div>
      </div>
    )
}

export default Concessionaires