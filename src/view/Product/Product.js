import "./Product.css";
import React, { useState, useEffect } from "react";
import ModalProd from "./ModalProd";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Url from "../../config";

function Product() {
  const location = useLocation();
  const [baza, setBaza] = useState([]);
  const [baz, setBaz] = useState([]);
  const [prod, setProd] = useState([]);

  const [next, setNext] = useState({
    quantity: 1,
    step: 50,
    category: "Комод",
  });
  // Token
  useEffect(() => {
    if (location.state) {
      setNext({ ...next, category: location.state.text, quantity: 1 });
    }
    setProd([]);
  }, [location.state]);
  useEffect(() => {
    const Fun = async () => {
      try {
        const res = await axios.post(`${Url}/product/pro`, next);
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
                  <h5>UZS {new Intl.NumberFormat().format(item.price)}.00</h5>
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
