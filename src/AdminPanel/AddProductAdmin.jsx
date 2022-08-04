import React, { useState, useEffect } from "react";
import { multipleFilesUpload } from "./data/api";
import NavbarAdmin from "./NavbarAdmin";
import ProductAdmin from "./ProductAdmin";
import axios from "axios";
import {useLocation } from "react-router-dom";

import Url from "../config";
function AddProductAdmin() {
  const location = useLocation()
  let cat = [
    {
      category: "Мебель",
      subCategory: [
        "Диваны",
        "Кресло",
        "Журнальный стол",
        "Комод",
        "Пуфы",
        "Стеллажи",
      ]
    },
    {
      category: "Светильники",
      subCategory: [
        "Подвесной светильник",
        "Подвесная люстра",
        "Потолочный светильник",
        "Торшеры",
        "Настольные лампы",
        "Бра",
      ]
    },
    {
      category: "Декор",
      subCategory: [
        "Картины",
        "УФ-печать",
        "Обои",
        "Панно из акрила",
        "Панно из металла",
        "Скульптура",
      ]
    },
  ];
  const [multipleFiles, setMultipleFiles] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Мебель");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [files, setMultipleProgress] = useState(0);
  const [prod, setProd] = useState([]);
  const [search, setSearch] = useState([]);
  const [next, setNext] = useState({
    quantity: 1,
    step: 50,
    category: "Все",
  });
  const [subCategory, setSubCategory] = useState("Диваны");
  const [sub, setSub] = useState([]);
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    setMultipleProgress(0);
  };

  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("price", price);
    formData.append("type", category);
    formData.append("title", title);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    // console.log(multipleFiles);
    if (multipleFiles.length > 0) {
      multipleFilesUpload(formData);
    } else {
      alert("Surat yuklang");
      // console.log(formData);
    }
  };
  useEffect(() => {
    function Foo() {
      for (let i of cat) {
        if (i.category == category) {
          setSub(i.subCategory);
        }
      }
    }
    Foo();
  }, [category]);
  useEffect(() => {
    const Fun = async () => {
      try {
        const res = await axios.post(`${Url}/product/${next.category==="Все"?"next":"pro"}`, next);
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
  function Search(text) {
    // console.log(text);
    const newService = prod.filter(
      (elem) =>
        elem.name.toLowerCase().includes(text.toLowerCase()) ||
        elem.category.toLowerCase().includes(text.toLowerCase()) ||
        elem.type.toLowerCase().includes(text.toLowerCase())
    );
    setSearch(newService);
  }
  const deleteProd = async (_id) => {
    const url = `${Url}/product/${_id}`;
    const result = await window.confirm("O'chirilsinmi?");
    if (result) {
      await axios.delete(url);
      setProd([]);
      setSearch([]);
      setNext({ ...next, quantity: 1 });
    }
  };

// ###########################
useEffect(() => {
  if (location.state) {
    setNext({ ...next, category: location.state.text, quantity: 1 });
  }
  setProd([]);
}, [location.state]);
 

  const Send = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NavbarAdmin search={Search} />

      <div className="container">
        <div className=" text-center mt-5 ">
          <h2>Add Product</h2>
        </div>
        <div className="row ">
          <div className="col-lg-7 mx-auto colAdminAdd">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form onSubmit={Send}>
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group formAdminAdd">
                            
                            <label className="labelADminProd">Name</label>
                            <input
                              type="text"
                              name="name"
                              className="form-control inputsAddPRoduct"
                              placeholder="Name"
                              onChange={(e) => setName(e.target.value)}
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group formAdminAdd">
                            
                            <label className="labelADminProd">Category</label>
                            <select
                              onChange={(e) => setCategory(e.target.value)}
                              name="category"
                              className="form-control inputsAddPRoduct"
                              required="required"
                            >
                              {cat.map((item, index) => {
                                return (
                                  <option value={item.category} key={index}>
                                    {item.category}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group formAdminAdd">
                            
                            <label className="labelADminProd">Price</label>
                            <input
                              type="text"
                              name="pice"
                              className="form-control inputsAddPRoduct"
                              placeholder="Pirce"
                              required="required"
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group formAdminAdd">
                            
                            <label className="labelADminProd">
                              SubCategory
                            </label>
                            <select
                              onChange={(e) => setSubCategory(e.target.value)}
                              name="subCategory"
                              className="form-control inputsAddPRoduct"
                              required="required"
                            >
                              {sub.map((item, index) => {
                                return (
                                  <option value={item} key={index}>
                                    {item}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group formAdminAddTExtarea">
                            
                            <label className="labelADminProd">Title</label>
                            <textarea
                              name="title"
                              className="form-control inputsAddPRoduct"
                              placeholder="Title"
                              rows="4"
                              required="required"
                              onChange={(e) => setTitle(e.target.value)}
                            ></textarea>{" "}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <input
                            type="file"
                            onChange={(e) => MultipleFileChange(e)}
                            className="form-control inputImageAdmin inputsAddPRoduct"
                            multiple
                            required="required"
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            type="submit"
                            className="btn btn-success btn-send pt-2 btn-block submitAddAdmin"
                            onClick={() => UploadMultipleFiles()}
                            value="Submit"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {search.length > 0 ? (
        <ProductAdmin del={deleteProd} prod={search} />
      ) : (
        <ProductAdmin del={deleteProd} prod={prod} />
      )}
    </>
  );
}

export default AddProductAdmin;
