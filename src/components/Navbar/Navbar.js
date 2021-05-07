import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/'><a className="navbar-brand ms-5" >BookStore</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item p">
                                <Link to='/'><a className="nav-link active me-5" >Home</a></Link>
                            </li>                        
                            <li className="nav-item">
                                <Link to="/order"><a className="nav-link active me-5" >Order</a></Link>
                            </li>                        
                            <li className="nav-item">
                                <a className="nav-link active me-5" href="/admin">Admin</a>
                            </li>                        
                            <li className="nav-item">
                                <a className="nav-link active me-5" href="/">Details</a>
                            </li>                        
                            <li className="nav-item">
                                <a className="nav-link active me-5" href="/register"><button className="btn btn-primary">Register</button></a>
                            </li>                        
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;