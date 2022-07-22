import React, { useState } from "react";
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

  const Send = async (e) => {
    e.preventDefault();
  };

  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("type", type);
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
                            <label className="labelADminProd">Type</label>
                            <input
                              type="text"
                              name="Type"
                              className="form-control inputsAddPRoduct"
                              placeholder="Type"
                              required="required"
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                            />
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
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />{" "}
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
                              <option value="">...</option>

                              <optgroup label="Мэбэл">
                                <option value="Диваны">Диваны</option>
                                <option value="Кресло">Кресло</option>
                                <option value="Журнальный стол">
                                  Журнальный стол
                                </option>
                                <option value="Комод">Комод</option>
                                <option value="Пуфы">Пуфы</option>
                                <option value="Стеллажи">Стеллажи</option>
                              </optgroup>
                              <optgroup label="Светильники">
                                <option value="Подвесной светильник">
                                  Подвесной светильник
                                </option>
                                <option value="Потолочный светильник">
                                  Потолочный светильник
                                </option>
                                <option value="Торшеры">Торшеры</option>
                                <option value="Настольные лампы">
                                  Настольные лампы
                                </option>
                                <option value="Бра">Бра</option>
                              </optgroup>
                              <optgroup label="Декор">
                                <option value="Картины">Картины</option>
                                <option value="УФ-печать">УФ-печать</option>
                                <option value="Обои">Обои</option>
                                <option value="Панно из акрила">
                                  Панно из акрила
                                </option>
                                <option value="Панно из металла">
                                  Панно из металла
                                </option>
                                <option value="Скульптура">Скульптура</option>
                              </optgroup>
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
