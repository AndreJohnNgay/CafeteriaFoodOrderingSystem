import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-lightgray">
                <div>
                    <div className="card" style={{ width: '25rem', borderRadius: '15px' }}>
                        {/* <img src="./ub-logo.png" className="card-img-top" alt="ub-logo" /> */}
                        <div className="card-body bg-dark-red" style={{ borderRadius: '15px' }}>
                            <h5 className="card-title text-light">Sign In</h5>
                            <br />
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-light">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="position-relative">
                                <label htmlFor="password" className="form-label text-light">Password</label>
                                <input type="password" className="form-control" id="password" />
                                <Link to="/forgot-password" className="position-absolute end-0 top-100 mt-1 text-light" style={{ textDecoration: 'none' }}>
                                    Forgot Password?
                                </Link>
                                
                            </div>
                            <br />
                            <hr />
                            <div className="text-center">
                                <Link to="/dashboard" className="btn w-50 btn-login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
