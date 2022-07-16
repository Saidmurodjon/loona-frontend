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
    let nat = baz.filter((item) => {
      if (item.category == a) {
        return true;
      }
    });
    setBaza(nat);
  };

  const Full = () => {
    setBaza((items) => [...baz]);
  };

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
            <button className="butFilter" onClick={() => Filter("Мэбэл")}>
              Мэбэл
            </button>
          </div>
          <div className="col-md-2">
            <button className="butFilter" onClick={() => Filter("Люстра")}>
              Люстра
            </button>
          </div>
          <div className="col-md-2">
            <button className="butFilter" onClick={() => Filter("Дэкор")}>
              Дэкор
            </button>
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
