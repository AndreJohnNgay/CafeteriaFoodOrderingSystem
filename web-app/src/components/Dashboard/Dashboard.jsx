import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import FirstRow from './FirstRow';
import ConcessionaireNews from './ConcessionaireNews';
import CafeteriasPerformance from './CafeteriasPerformance';

function Dashboard() {
    return (
        <div className='row vh-100 bg-lightgray'>
            <Sidebar />
            <div className="col-md-10">
                <Navbar />
                <p className="h1 mt-3">Dashboard</p>
                <br />
                <FirstRow />
                <br />
                <div className="row mb-4">
                    {/* <div className="col-md-8 h-100">
                        <img
                            src="./graph.png"
                            className="img-fluid rounded"
                            alt="Graph"
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                    </div> */}
                    <div className="col-md-8" h-100>
                    <CafeteriasPerformance />
                    </div>
                    <div className="col-md-4 h-100">
                        <ConcessionaireNews />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
