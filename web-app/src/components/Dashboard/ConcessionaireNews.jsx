import React from 'react'
import {Link} from 'react-router-dom'

function ConcessionaireNews() {
    return (
        <div>
            <h4>Concessionaire Password Reset Requests</h4>
            <table
                class="table"
                style={{
                borderRadius: '10px',
                overflow: 'hidden'
            }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>5</td>
                        <td>Jimmy Sans</td>
                        <td>
                            <Link to="/cafeteria/1" className="btn btn-danger">
                                View</Link>
                            <Link to="/cafeteria/1" className="btn btn-danger ms-1">
                                Reset</Link>
                            <button type="button" class="btn btn-danger ms-1">
                                Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>3</td>
                        <td>Jimmy Sans</td>
                        <td>
                            <Link to="/cafeteria/1" className="btn btn-danger">
                                View</Link>
                            <Link to="/cafeteria/1" className="btn btn-danger ms-1">
                                Reset</Link>
                            <button type="button" class="btn btn-danger ms-1">
                                Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>1</td>
                        <td>Jimmy Sans</td>
                        <td>
                            <Link to="/cafeteria/1" className="btn btn-danger">
                                View</Link>
                            <Link to="/cafeteria/1" className="btn btn-danger ms-1">
                                Reset</Link>
                            <button type="button" class="btn btn-danger ms-1">
                                Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>6</td>
                        <td>Jimmy Sans</td>
                        <td>
                            <Link to="/cafeteria/1" className="btn btn-danger">
                                View</Link>
                            <Link to="/cafeteria/1" className="btn btn-danger ms-1">
                                Reset</Link>
                            <button type="button" class="btn btn-danger ms-1">
                                Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>9</td>
                        <td>Jimmy Sans</td>
                        <td>
                            <Link to="/cafeteria/1" className="btn btn-danger">
                                View</Link>
                            <Link to="/cafeteria/1" className="btn btn-danger ms-1">
                                Reset</Link>
                            <button type="button" class="btn btn-danger ms-1">
                                Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ConcessionaireNews