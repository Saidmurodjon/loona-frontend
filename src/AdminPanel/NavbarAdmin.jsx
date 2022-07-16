import React from 'react';
import { Link } from 'react-router-dom';
function NavbarAdmin() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-4">
        <div className="container">
          <Link to='/' className="navbar-brand" >Admin Panel</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link to='/addProduct' className="nav-link" >AddProduct</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/userAdm'>Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contactAdm'>ContactAdm</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAdmin;