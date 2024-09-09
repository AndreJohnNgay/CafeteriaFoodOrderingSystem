import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse d-flex justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item me-3">
                                <a className="nav-link" href="#">
                                    <img
                                        src="https://media.istockphoto.com/id/1598038956/vector/bell-icon-vector-illustration-symbol.jpg?s=612x612&w=0&k=20&c=Ly_vjHmtbwhlsuCl8YkGqZ6zkOJKH03D_BhDY89Qzdg="
                                        alt="User"
                                        className="rounded-circle"
                                        style={{
                                        width: '40px',
                                        height: '40px'
                                    }}/>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="User"
                                        className="rounded-circle"
                                        style={{
                                        width: '40px',
                                        height: '40px'
                                    }}/>
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">Profile</a>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <Link className="dropdown-item" to="/">Logout</Link>
  
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr/>
        </div>
    );
}

export default Navbar;
