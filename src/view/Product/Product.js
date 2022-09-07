import "./Product.css";
import React, { useState, useEffect } from "react";
import ModalProd from "./ModalProd";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Url from "../../config";
import { menuItems } from "../../menuItems";
import p1 from "../../assets/22.png";
import p2 from "../../assets/11.png";
import p3 from "../../assets/33.png";
function Product() {
  const location = useLocation();
  const [prod, setProd] = useState([]);
  
  const [next, setNext] = useState({
    quantity: 1,
    step: 50,
    subCategory: "ПРОДУКТЫ",
    category: "ПРОДУКТЫ",
    all: true,
    fonCategory: "",
  });
  // Token
  useEffect(() => {
    if (location.state) {
      if (
        location.state.text === "Мебель" ||
        location.state.text === "Светильники" ||
        location.state.text === "Декор"
      ) {
        setNext({
          ...next,
          all: false,
          category: location.state.text,
          fonCategory: location.state.text,
          subCategory: "",
          quantity: 1,
        });
      } else if (location.state.text === "ПРОДУКТЫ") {
        setNext({
          ...next,
          all: true,
          category: "",
          subCategory: "",
          quantity: 1,
        });
      } else {
        setNext({
          ...next,
          all: false,
          category: "",
          subCategory: location.state.text,
          quantity: 1,
        });
      }
    }
    setProd([]);
  }, [location.state]);
  useEffect(() => {
    menuItems[1].submenu.map((i) => {
      i.submenu.map((e) => {
        if (e.title === location.state.text && next.fonCategory !== i.title) {
          setNext({
            ...next,
            fonCategory: i.title,
          });
        }
      });
    });
  }, [next.subCategory]);
  useEffect(() => {
    const Fun = async () => {
      try {
        const res = await axios.post(
          `${Url}/product/${next.all === true ? "next" : "pro"}`,
          next
        );
        if (res.status === 200) {
          setProd([...prod, ...res.data]);
          setNext({ ...next, quantity: next.quantity + 1 });
        }
      } catch (err) {
        console.log(err);
      }
    };
    Fun();
  }, [next]);

  // public_html/porto
  const [tempdata, setTempData] = useState([]);
  const [model, setModel] = useState(false);
  const View = (files, name, price, title, prod, category) => {
    let tempData = [files, name, price, title, prod, category];
    setTempData((item) => [...tempData]);

    return setModel(true);
  };

  const getDanniy = (item) => {
    localStorage.setItem("user", JSON.stringify(item));
  };
  return (
    <div className="Product mt-5">
      <div className="container">
        <div className="row m-2">
          <p className="engtepa mt-3 m-q">
            Получите 10% СКИДКУ на LOONA — покупайте прямо сейчас!
          </p>
          <div
            className="row mt-5 fon"
            style={{
              height: "250px",
              backgroundImage: `url(${
                next.fonCategory === "Мебель"
                  ? p1
                  : next.fonCategory === "Светильники"
                  ? p2
                  : next.fonCategory === "Декор"
                  ? p3
                  : p1
              })`,
            }}
          ></div>
        </div>

        <div className="row">
          {prod.map((item, index) => {
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
                          item,
                          item.category
                        )
                      }
                      className="quickview"
                    >
                      БЫСТРЫЙ ПРОСМОТР
                    </button>
                  </div>
                  <div className="title">
                    {" "}
                    <h6 className="kartaH6">{item.category}</h6>
                  </div>
                  <div className="prname">{item.name}</div>
                  <h5>УЗС {new Intl.NumberFormat().format(item.price)}.00</h5>
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
          category={tempdata[5]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Product;
