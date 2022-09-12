import React, { useEffect, useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import axios from "axios";
import Url from "../config";
import { FcReadingEbook } from "react-icons/fc";

function UserAdm() {
  const [mish, setMish] = useState([]);

  useEffect(() => {
    async function demo() {
      const res = await axios.get(`${Url}/order`);
      setMish(res.data);
    }
    demo();
  }, []);

  const deletebtn = async (_id) => {
    const url = `${Url}/order/${_id}`;
    if (window.confirm("O'chrishni xoxlaysizmi?")) {
      await axios.delete(url);
    }
    window.location.reload(false);
  };
  return (
    <>
      <NavbarAdmin />

      <div className="userAdmin">
        <div className="container">
          <h2 className="userNameTitle">Mijozlar</h2>
          {mish.map((mik) => {
            return (
              <div className="row" key={mik._id}>
                <div className="col-md-12">
                  <div className="card cardUsersAdmin">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="userinfGlob">
                          <div className="iconUSrsAdm">
                            <FcReadingEbook className="iconUsers" />
                          </div>

                          <div className="infotmation">
                            <h3 className="lowName">{mik.name}</h3>
                            <p className="lowTel">{mik.tel}</p>
                            <p className="lowAdress">{mik.adress}</p>
                          </div>

                          <div className="btnUsersAdmin">
                            <button
                              className="btnOrderAdmin"
                              onClick={() => {
                                deletebtn(mik._id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      {mik.order.map((mey) => {
                        return (
                          <div className="col-md-2 orderProd" key={mey._id}>
                            <h4 className="textorder">{mey.name}</h4>
                            <p className="textorder">
                              <b>{mey.price}Uzs</b>
                            </p>
                            <p className="textorder"> {mey.quantity}</p>
                            <img
                              className="imgProdOrder"
                              src={Url + "/" + mey.files[0].filePath}
                              alt=" "
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserAdm;
