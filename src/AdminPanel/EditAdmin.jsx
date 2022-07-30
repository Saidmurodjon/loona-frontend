import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Url from "../config";
import axios from "axios";
function EditAdmin() {
  const navigator = useNavigate();
  const { id } = useParams();
  const apiUrl = `${Url}/product/${id}`;
  const saved = JSON.parse(localStorage.getItem("product"));

  const [multipleFiles, setMultipleFiles] = useState("");
  const [name, setName] = useState(saved.name);
  const [category, setCategory] = useState(saved.type);
  const [price, setPrice] = useState(saved.price);
  const [type, setType] = useState(saved.category);
  const [title, setTitle] = useState(saved.category);
  const [files, setMultipleProgress] = useState(0);
  const [subCategory, setSubCategory] = useState("");
  const [sub, setSub] = useState([]);
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    setMultipleProgress(0);
  };
  const multipleFilesUpload2 = async (data) => {
    try {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      await axios.put(apiUrl, data, config);
      navigator("/addProduct");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
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
      ],
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
      ],
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
      ],
    },
  ];
  const Send = async (e) => {
    e.preventDefault();
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
  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", subCategory);
    formData.append("price", price);
    formData.append("type", category);
    formData.append("title", title);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    if (multipleFiles.length > 0) {
      await multipleFilesUpload2(formData);
    } else {
      alert("Surat yuklang");
    }
    // await multipleFilesUpload2(formData);
  };

  return (
    <>
      <div className="container">
        <div className=" text-center mt-5 ">
          <h2>Edit Product</h2>
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
                            {" "}
                            <label className="labelADminProd">Name</label>
                            <input
                              type="text"
                              name="name"
                              className="form-control inputsAddPRoduct"
                              placeholder="Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group formAdminAdd">
                            {" "}
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
                            {" "}
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
                            {" "}
                            <label className="labelADminProd">
                              SubCategory
                            </label>
                            <select
                              onChange={(e) => setSubCategory(e.target.value)}
                              name="category"
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
                            {" "}
                            <label className="labelADminProd">Title</label>
                            <textarea
                              name="title"
                              className="form-control inputsAddPRoduct"
                              placeholder="Title"
                              rows="4"
                              required="required"
                              value={title}
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
                          />{" "}
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
    </>
  );
}

export default EditAdmin;
