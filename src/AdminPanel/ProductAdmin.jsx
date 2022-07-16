import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Url from "../config";
function ProductAdmin(props) {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    async function demo() {
      const res = await axios.get(`${Url}/product`);
      setProd(res.data);

    }
    demo();
  }, []);


  const deleteProd = (_id) => {
    const url = `${Url}/product/${_id}`;
    console.log(url);
    if (window.confirm("O'chirishni xoxlaysizmi?")) {
      axios.delete(url);
    }
    window.location.reload(false);
  };
  return (
    <>
      <div className="container ProductAdmin">
        <div className="row">
          {prod.map((elem) => {
            return (
              <div className="col-md-3" key={elem._id}>
                <div className="card cardAdminProduct">
                  <div className="cardImgAdm">
                    <img
                      className="imgProductAdmin"
                      src={`${Url}/${elem.files[0].filePath}`}
                    />
                  </div>
                  <h4 className="daniAdminProduct">
                    <b>{elem.name}</b>
                  </h4>
                  <h4 className="daniAdminProduct">
                    <b>{elem.price}</b>UZS
                  </h4>
                  <p className="daniAdminProduct">

                  </p>
                  <Link
                    onClick={() => {
                        localStorage.setItem('product', JSON.stringify(elem))
                      }
                    }
                    to={"/editProduct/" + elem._id}>
                    <button
                      className="btn btn-primary btnAdminProduct w-100 ">
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => deleteProd(elem._id)}
                    className="btn btn-danger btnAdminProduct w-100">
                    Delte
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductAdmin;
