import { useState } from "react";
import React from "react";
import "./Contact.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import axios from 'axios';
import Url from '../../config'

function Contact() {
  const [prod, setProd] = useState({
    name: "",
    surename: "",
    tel: "",
    title: ""
  });
  const changeHandler = (e) => {
    setProd({ ...prod, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    axios
      .post(`${Url}/contact`, prod)
      .then((res) => {
        alert("Successfully");
        window.location.reload(false)
      })
      .catch((err) => {
        alert("Successfully");
      });
    e.preventDefault();
  };
  return (
    <>
      <div className="wrapper cont">
        <div className="container">
          <div className="contact1">
            <h1 className="conH">Cвязаться с нами</h1>
            <div className="inp">
              <form onSubmit={onSubmit}>
                <input
                  name="name"
                  type="text"
                  className="form-control contactinput"
                  required
                  onChange={changeHandler}
                  placeholder="Имя"
                />
                <input
                  name="surename"
                  type="text"
                  className="form-control contactinput"
                  required
                  onChange={changeHandler}
                  placeholder="Фамилия"
                />
                <input
                  name="tel"
                  type="text"
                  className="form-control  contactinput"
                  required
                  onChange={changeHandler}
                  placeholder="Телефон номер"
                />
                <textarea
                  name="title"
                  className="form-control contactInput"
                  id="exampleFormControlTextarea1"
                  required
                  onChange={changeHandler}
                  placeholder="Для ваших предложений и отзывов"
                ></textarea>
                <button type="submit" className="bitton">Подтверждение</button>
              </form>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="conH">
            <h1 className="conH">Карта</h1>
            <YMaps>
              <div className="Maps">
                <Map
                  className="maps1"
                  defaultState={{
                    center: [41.260020, 69.232809],
                    zoom: 16,
                  }}
                >
                  <Placemark geometry={[41.260020, 69.232809]} />
                </Map>
              </div>
            </YMaps>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;
