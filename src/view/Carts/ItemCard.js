import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Url from "../../config";

import "./ItemCard.css";

function Itemcard(props) {
  const { file } = props;
  const { addItem } = useCart();
  const [count, setCount] = useState(1);
  console.log(typeof props.file);
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
          <div className="col-12 col-md-6">
            <div className="row">
              {file?file.map((e) => (
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src={`${Url}/${e.filePath}`}
                    alt={e.fileName}
                  />
                </div>
              )):"surat mavjud emas"}
            </div>
          </div>
          <div className="col-12 col-md-6 orta">
            <h1>{props.name}</h1>
            <h2>{new Intl.NumberFormat().format(props.price)}.00 UZS</h2>
            <p>{props.title}</p>
            <h6>
              <span className="sku-wrapper"> CATEGORIES:</span> OFFICE, OUTDOOR
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
              Add to cart
            </button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itemcard;
