import "./Product.css";
import React, { useState, useEffect } from "react";
import ModalProd from "./ModalProd";
import axios from "axios";
import { Link } from "react-router-dom";
import Url from "../../config";
function Product() {
  const [baza, setBaza] = useState([]);
  const [baz, setBaz] = useState([]);
  useEffect(() => {
    async function Demo() {
      const res = await axios.get(`${Url}/product`);
      setBaza(res.data);
      setBaz(res.data);
    }
    Demo();
  }, []);

  const Filter = (a) => {
    const nat = baz.filter((item) => {
      if (item.category === a) {
        return true;
      }
    });
    setBaza(nat);
  };

  const Full = () => {
    setBaza((items) => [...baz]);
  };
  // public_html/porto
  const [tempdata, setTempData] = useState([]);
  const [model, setModel] = useState(false);
  const View = (files, name, price, title, prod) => {
    let tempData = [files, name, price, title, prod];
    setTempData((item) => [...tempData]);

    return setModel(true);
  };

  const getDanniy = (item) => {
    localStorage.setItem("user", JSON.stringify(item));
  };
  return (
    <div className="Product mt-5">
      <div className="container">
        <div className="row mb-5 d-flex justify-content-between">
          <div className="col-md-2">
            <button className="butFilter" onClick={() => Full()}>
              Все
            </button>
          </div>
          <div className="col-md-2">
            {/* <button className="butFilter" onClick={() => Filter("Мэбэл")}>
              Мэбэл
            </button> */}
            <form action="">
              <select
                onChange={(e) => Filter(e.target.value)}
                name="category"
                className="form-control bg-dark text-white text-center"
                required="required"
              >
                <optgroup label="Мэбэл">
                  {/* <option defaultValue="Мэбэл">Мэбэл</option> */}
                  <option value="Диваны">Диваны</option>
                  <option value="Кресло">Кресло</option>
                  <option value="Журнальный стол">Журнальный стол</option>
                  <option value="Комод">Комод</option>
                  <option value="Пуфы">Пуфы</option>
                  <option value="Стеллажи">Стеллажи</option>
                </optgroup>
              </select>
            </form>
          </div>
          <div className="col-md-2">
            {/* <button className="butFilter" onClick={() => Filter("Люстра")}>
              Люстра
            </button> */}
            <form action="">
              <select
                onChange={(e) => Filter(e.target.value)}
                name="category"
                className="form-control bg-dark text-white text-center"
                required="required"
              >
                <optgroup label="Светильники">
                  <option value="Подвесной светильник">
                    Подвесной светильник
                  </option>
                  <option value="Потолочный светильник">
                    Потолочный светильник
                  </option>
                  <option value="Торшеры">Торшеры</option>
                  <option value="Настольные лампы">Настольные лампы</option>
                  <option value="Бра">Бра</option>
                </optgroup>
              </select>
            </form>
          </div>
          <div className="col-md-2">
            {/* <button className="butFilter" onClick={() => Filter("Дэкор")}>
              Дэкор
            </button> */}

            <form action="">
              <select
                onChange={(e) => Filter(e.target.value)}
                name="category"
                className="form-control bg-dark text-white text-center"
                required="required"
              >
                <optgroup label="Декор">
                  <option value="Картины">Картины</option>
                  <option value="УФ-печать">УФ-печать</option>
                  <option value="Обои">Обои</option>
                  <option value="Панно из акрила">Панно из акрила</option>
                  <option value="Панно из металла">Панно из металла</option>
                  <option value="Скульптура">Скульптура</option>
                </optgroup>
              </select>
            </form>
          </div>
          <div className="col-md-2">
            <button
              className="butFilter"
              onClick={() => Filter("Элэмэнтыдэкора")}
            >
              Элэмэнты дэкора
            </button>
          </div>
        </div>
        <div className="row">
          {baza.map((item, index) => {
            return (
              <div className="col-12 col-md-3" key={index}>
                <div className="card cardaaa">
                  <div className="cardImage">
                    <Link to="/proCard">
                      <img
                        onClick={() => getDanniy(item)}
                        src={`${Url}/${item.files[0].filePath}`}
                        alt="rasm"
                      />
                    </Link>
                    <button
                      onClick={() =>
                        View(
                          item.files,
                          item.name,
                          item.price,
                          item.title,
                          item
                        )
                      }
                      className="quickview"
                    >
                      QUICK VIEW
                    </button>
                  </div>
                  <div className="title">
                    {" "}
                    <h6 className="kartaH6">{item.category}</h6>
                  </div>
                  <div className="prname">{item.name}</div>
                  <h5>UZS {item.price}.00</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {model === true ? (
        <ModalProd
          files={tempdata[0]}
          name={tempdata[1]}
          price={tempdata[2]}
          title={tempdata[3]}
          prod={tempdata[4]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Product;
