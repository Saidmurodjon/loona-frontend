import Url from "../config";
import { Link } from "react-router-dom";
function ProductAdmin({ prod = [], del }) {
  // const [show, setShow] = useState(false);
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
                      alt=" "
                    />
                  </div>
                  <h4 className="daniAdminProduct">
                    <b className="float-start">Имя:</b>&nbsp;{elem.name}
                  </h4>
                  <h4 className="daniAdminProduct">
                    <b className="float-start">Тип:</b> {elem.type}
                  </h4>
                  <h4 className="daniAdminProduct">
                    <b className="float-start">Цена:</b>&nbsp;
                    {new Intl.NumberFormat().format(elem.price)} UZS
                  </h4>
                  <h4 className="daniAdminProduct">
                    <b className="float-start">Категория:</b>&nbsp;
                    {elem.category}{" "}
                  </h4>

                  <p className="daniAdminProduct"></p>
                  <Link
                    onClick={() => {
                      localStorage.setItem("product", JSON.stringify(elem));
                    }}
                    to={"/editProduct/" + elem._id}
                  >
                    <button className="btn btn-primary btnAdminProduct w-100 ">
                      Обновить
                    </button>
                  </Link>

                  <button
                    onClick={() => del(elem._id)}
                    className="btn btn-danger btnAdminProduct w-100"
                  >
                    Удалить
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
