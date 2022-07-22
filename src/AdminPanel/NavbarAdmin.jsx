import React from "react";
import { Link } from "react-router-dom";
function NavbarAdmin({ search }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-4">
        <div className="container">
          <Link to="/addProduct" className="navbar-brand">
            Панель администратора
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <form action="">
              <input
                className="form-control"
                onChange={(e) => search(e.target.value)}
                type="search"
                placeholder="Поиск"
              />
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link to="/addProduct" className="nav-link">
                  Добавить продукт
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userAdm">
                  Пользователь
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactAdm">
                  Контакт
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAdmin;
