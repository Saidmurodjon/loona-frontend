import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuItems } from "./AdminMenu";
import MenuItems from "../component/navbar/MenuItems";
import "../component/navbar/Nav.css";
function NavbarAdmin({ search }) {
  const navigate = useNavigate();

  function NavbarFunction(text) {
    if (text === "Добавить продукт") {
      navigate("/addProduct");
    } else if (text === "Пользователь") {
      navigate("/userAdm");
    } else if (text === "Контакт") {
      navigate("/contactAdm");
    } else {
      if (text.length > 0) {
        navigate("/addProduct",{state:{text:text}})
      }
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-4">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-3">
              {" "}
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
            </div>
            <div className="col-md-9 d-flex justify-content-end">
              {" "}
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <form action="">
                  <input
                    className="form-control"
                    onChange={(e) => search(e.target.value)}
                    type="search"
                    placeholder="Поиск"
                  />
                </form>

                <ul className="menus w-75 admin-menu">
                  {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return (
                      <MenuItems
                        items={menu}
                        key={index}
                        depthLevel={depthLevel}
                        navfunc={NavbarFunction}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAdmin;
