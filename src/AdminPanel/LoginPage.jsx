import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Url from "../config";
import "./Admin.css";
function LoginPage() {
  const [mon, setMon] = useState({
    login: "",
    password: "",
  });

  const navigate = useNavigate();

  const OnSubmit = async (e) => {
    e.preventDefault();
    // let res = await axios.post(`${Url}/admin`, mon);
    // console.log(res);

    if (mon.login === "admin" && mon.password === "1020") {
      navigate("/addProduct");
    } else {
      alert("Login yoki Parol xato");
    }
  };

  const changeHandler = (e) => {
    setMon({ ...mon, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginPageGlav">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-title">Admin</div>
            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form onSubmit={OnSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">LOGIN</label>
                    <input
                      type="text"
                      className="form-control inputLoginPage"
                      name="login"
                      value={mon.login}
                      onChange={changeHandler}
                      required="required"
                    />
                  </div>
                  <div className="form-groupLoginPage">
                    <label className="form-control-label ">PASSWORD</label>
                    <input
                      type="password"
                      className="form-control inputLoginPage"
                      name="password"
                      value={mon.password}
                      onChange={changeHandler}
                      required="required"
                    />
                  </div>
                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text"></div>
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btnLoginPage">
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
