import React, { useState } from "react";
import "./Card.css";
import axios from "axios";
import { useCart } from "react-use-cart";
import Url from "../../config";
import { useNavigate } from "react-router-dom";
function Card() {
  const navigate = useNavigate();
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [cart, setCart] = useState(items);
  const [send, setSend] = useState({
    name: "",
    tel: "",
    adress: "",
    order: cart,
  });

  const handlerInput = (a) => {
    setSend({ ...send, [a.target.name]: a.target.value });
  };
  const Alerttab = async (a) => {
    a.preventDefault();
    if (!send.name || !send.tel ||!send.adress) {
      alert("Malumotlarni toliq kiriting");
    } else {
      await axios
        .post(`${Url}/order`, send)
        .then((res) => {
          alert("Ma'lumotlar qabul qilindi");
          emptyCart();
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
      window.location.reload(false);
    }
  };

  if (isEmpty)
    return (
      <div className="mt-5">
        <h5 className="d-inline m-5 ">КАРТА ПУСТА :</h5>
      </div>
    );
  return (
    <>
      <main className="page">
        <section className="shopping-cart ">
          <div className="container">
            <div className="block-heading">
              <h2> Корзина </h2>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="content">
                  <div className="row">
                    {items.map((item, index) => {
                      return (
                        <div className="col-md-12" key={index}>
                          <div className="items">
                            <div className="product">
                              <div className="row d-flex align-items-center">
                                <div className="col-md-3">
                                  <img
                                    className="card-img-top img-fluid"
                                    src={`${Url}/${item.files[0].filePath}`}
                                    alt=" "
                                  />
                                </div>
                                <div className="col-md-8">
                                  <div className="info">
                                    <div className="row">
                                      <div className="col-md-5 product-name">
                                        <div className="product-name">
                                          <h5 className="card-title">
                                            Имя :
                                            <span className="value">
                                              {item.name}
                                            </span>
                                          </h5>
                                          <div className="product-info">
                                            <div>
                                              Тип :
                                              <span className="value">
                                                {item.type}
                                              </span>
                                            </div>
                                            <div>
                                              Категория :
                                              <span className="value">
                                                {item.category}
                                              </span>
                                            </div>
                                            <div></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4 quantity">
                                        <button
                                          className="btn btncount  ms-2 m-1 w-25"
                                          onClick={() =>
                                            updateItemQuantity(
                                              item.id,
                                              item.quantity - 1
                                            )
                                          }
                                        >
                                          -
                                        </button>
                                        <p className="card-text d-inline">
                                          {item.quantity}
                                        </p>
                                        <button
                                          className="btn btncount ms-2 m-1 w-25"
                                          onClick={() =>
                                            updateItemQuantity(
                                              item.id,
                                              item.quantity + 1
                                            )
                                          }
                                        >
                                          +
                                        </button>
                                        <button
                                          className="btn btndelete ms-2 m-1"
                                          onClick={() => removeItem(item.id)}
                                        >
                                          Удалить
                                        </button>
                                      </div>
                                      <div className="col-md-3 price">
                                        <span>
                                          {" "}
                                          {new Intl.NumberFormat().format(
                                            item.price
                                          )}{" "}
                                          УЗС{" "}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="summary">
                  <h3> Резюме </h3>
                  <div className="summary-item">
                    <span className="text2">Количество продуктов</span>
                    <span className="price"> {totalUniqueItems} шт.</span>
                  </div>
                  <div className="summary-item">
                    <span className="text2">Общее количество продуктов</span>
                    <span className="price"> {totalItems} шт. </span>
                  </div>
                  <div className="summary-item">
                    <span className="text2"> Общее сумма </span>
                    <span className="price">
                      {" "}
                      {new Intl.NumberFormat().format(cartTotal)} УЗС{" "}
                    </span>
                  </div>
                </div>
                <form onSubmit={Alerttab} className="my-5">
                  <div className="royxat1 p-2">
                    <div>
                      <h5>Заполните список</h5>
                    </div>
                    <div className="modal-body">
                      <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Имя</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Введите имя"
                          onChange={handlerInput}
                          value={send.name}
                          name="name"
                        />
                      </div>
                      <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">
                          Номер телефона
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Введите номер телефона"
                          onChange={handlerInput}
                          value={send.tel}
                          name="tel"
                        />
                      </div>
                      <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Адресс</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Введите адресс"
                          onChange={handlerInput}
                          value={send.adress}
                          name="adress"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn  btnbuy btn-lg ">
                        Заказать
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Card;
