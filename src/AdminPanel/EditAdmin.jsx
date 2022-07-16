import React, { useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import Url from "../config";
import axios from 'axios';
function EditAdmin() {
  const navigator = useNavigate()
  const {id} =  useParams()
  const apiUrl = `${Url}/product/${id}`;
  const saved = JSON.parse(localStorage.getItem("product"))

  const [multipleFiles, setMultipleFiles] = useState("");
  const [name, setName] = useState(saved.name);
  const [category, setCategory] = useState(saved.type)
  const [price, setPrice] = useState(saved.price);
  const [type, setType] = useState(saved.category);
  const [title, setTitle] = useState(saved.category);
  const [files, setMultipleProgress] = useState(0);

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    setMultipleProgress(0);
  };
  const multipleFilesUpload2 = async (data, options) => {
    try {
      await axios.patch(apiUrl, data, options)
      navigator("/addProduct")  
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  const Send = async (e) => {
    e.preventDefault()
  }

  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("type", type);
    formData.append("title", title);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append('files', multipleFiles[i]);
    }

    await multipleFilesUpload2(formData);

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
                          <div className="form-group formAdminAdd"> <label className='labelADminProd' >Name</label>
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
                          <div className="form-group formAdminAdd"> <label className='labelADminProd' >Type</label>
                            <input
                              type="text"
                              name="Type"
                              className="form-control inputsAddPRoduct"
                              placeholder="Type"
                              required="required"
                              onChange={(e) => setType(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group formAdminAdd"> <label className='labelADminProd' >Price</label>
                            <input
                              type="text"
                              name="pice"
                              className="form-control inputsAddPRoduct"
                              placeholder="Pirce"
                              required="required"
                              onChange={(e) => setPrice(e.target.value)}

                            /> </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group formAdminAdd"> <label className='labelADminProd' >Category</label>
                            <select
                              onChange={(e) => setCategory(e.target.value)}
                              name="category"
                              className="form-control inputsAddPRoduct"
                              required="required" >
                              <option value='Мэбэл'>Мэбэл</option>
                              <option value='Люстра'>Люстра</option>
                              <option value='Дэкор'>Дэкор</option>
                              <option value='Элэмэнтыдэкора'>Элэмэнты дэкора</option>
                            </select>

                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group formAdminAddTExtarea"> <label className='labelADminProd'>Title</label>
                            <textarea
                              name="title"
                              className="form-control inputsAddPRoduct"
                              placeholder="Title"
                              rows="4"
                              required="required"
                              onChange={(e) => setTitle(e.target.value)}
                            ></textarea> </div>
                        </div>
                        <div className="col-md-12">
                          <input
                            type="file"
                            onChange={(e) => MultipleFileChange(e)}
                            className='form-control inputImageAdmin inputsAddPRoduct'
                            multiple
                            required="required"
                          />
                        </div>
                        <div className="col-md-12">
                          <input type="submit"
                            className="btn btn-success btn-send pt-2 btn-block submitAddAdmin"
                            onClick={() => UploadMultipleFiles()}
                            value="Submit"
                          /> </div>
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
