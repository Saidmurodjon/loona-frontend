import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Url from "../../config";

import "./ItemCard.css";

function Itemcard(props) {
  const { file } = props;
  const { addItem } = useCart();
  const [count, setCount] = useState(1);
  //   file.map((e) => console.log(e));
  return (
    <div className="container-fluid modaliddin">
      <div className="mod">
        <div className="row">
          <button
            type="button" 
            className="btn-close kloz"
            onClick={props.hide}
          ></button>
          <div className='col-12 col-md-6'>
                <img className='img img-fluid w-100 h-100'  src={props.img} alt={props.img} />
            </div>
          <div className="col-12 col-md-6 orta">
            <h1>{props.name}</h1>
            <h2>{new Intl.NumberFormat().format(props.price)}.00 УЗС</h2>
            <p>{props.title}</p>
            <h6>
              <span className="sku-wrapper"> КАТЕГОРИИ:</span> {props.category}
            </h6>
            <hr />
            <input
              className="minus"
              type="button"
              value="-"
              onClick={() => {
                setCount(count - 1);
              }}
            />
            <input
              className="qty"
              type="number"
              value={count}
              size="4"
              step="1"
              min="1"
            />
            <input
              className="plus"
              type="button"
              value="+"
              onClick={() => {
                setCount(count + 1);
              }}
            />
            <button className="addToCart" onClick={() => addItem(props.item)}>
            ДОБАВИТЬ В КОРЗИНУ
            </button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itemcard;
