import React, { useState } from "react";
import "./Tavsif.css";
import ItemCard from "../Carts/ItemCard";
import Url from "../../config";
function ModalProd(props) {
  return (
    <ItemCard
      img={`${Url}/${props.files[0].filePath}`}
      file={props.files}
      title={props.title}
      hide={props.hide}
      name={props.name}
      price={props.price}
      type={props.type}
      item={props.prod}
    />
  );
}

export default ModalProd;
