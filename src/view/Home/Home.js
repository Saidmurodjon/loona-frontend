import { AiOutlineDollar, AiFillCreditCard, AiOutlineFieldTime } from "react-icons/ai"
import { FaCarSide } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import ModalProd from "../Product/ModalProd"
import { Link } from 'react-router-dom'
import Url from "../../config"
import axios from "axios"
import './Home.css'
function Home() {
    const [prod, setProd] = useState([])
    useEffect(() => {
        async function Demo() {
            let res = await axios(`${Url}/product`)
            setProd(res.data.slice(0,8))
        }
        Demo()
    }, [])

    
  const [tempdata, setTempData] = useState([])
//   console.log(tempdata);
  const [model, setModel] = useState(false);
  const View = (files, name, price, title,prod) => {
    let tempData = [files, name, price, title , prod ]
    setTempData(item => [...tempData])
    console.log(tempData)
    return setModel(true)


  }

  const getDanniy = (item) => {
    localStorage.setItem('user', JSON.stringify(item))
  }




    return (
        <>
            <div className="content-home">
                <div className="top-bar ">
                    <div className="row">
                        <div className="col-md-5 mt-5 ">
                            <div className="img-top "

                                style={{
                                    position: "relative ", backgroundImage: `url("https://www.portotheme.com/wordpress/porto/elementor/shop29/wp-content/uploads/sites/30/2019/07/shop29_shop_banner.jpg")`
                                }}
                            > <div className="hover-img">
                                    <h1>Black</h1>
                                    <h2>Armchair</h2>
                                    <p>Starting From $250</p>
                                    <Link className="top-link" to="/product">
                                        SHOP NOW →
                                    </Link>
                                </div>
                            </div>
                            <div className="img-bottom mt-4 d-flex">
                                <div className="left-img d-inline-block"
                                    style={{
                                        position: "relative ", backgroundImage: `url("https://www.portotheme.com/wordpress/porto/elementor/shop29/wp-content/uploads/sites/30/2019/07/shop29_home_banner2.jpg")`
                                    }}
                                >
                                    <div className="hover-img pt-3">
                                        <p>CHECK NEW ARRIVALS</p>
                                        <h2>COOL LAMPS</h2>
                                    </div>
                                </div>
                                <div className="right-img d-inline-block"
                                    style={{
                                        position: "relative ", backgroundImage: `url("https://www.portotheme.com/wordpress/porto/elementor/shop29/wp-content/uploads/sites/30/2019/07/shop29_home_banner3.jpg")`
                                    }}
                                >
                                    <div className="hover-img">
                                        <div className="text-right-img">
                                            <p>EXCLUSIVE NEW COLLECTION</p>
                                            <h2>LUXURIOUS</h2>
                                            <h2>JACUZZI</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 mt-5  right-big align-items-center d-flex justify-content-between "
                            style={{
                                position: "relative ", backgroundImage: `url("https://www.portotheme.com/wordpress/porto/elementor/shop29/wp-content/uploads/sites/30/2019/07/shop29_home_banner4-e1598671968471.jpg")`
                            }}
                        >
                            <div className="hover-img">
                                <div className="left-big-text px-3">
                                    <h1>WOODEN</h1>
                                    <h1>BLACK CHAIR</h1>
                                    <div className="redi">
                                        <h3>GO CUPON</h3><br />
                                        <span>UP TO</span>
                                        <h3>$100</h3><p className="offf">OFF</p>
                                    </div>
                                    <p className="brown-p">STARTING FROM $350</p>
                                    <Link className="top-link" to="/">
                                        SHOP NOW →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>









                <div className="row my-3">
                    <div className="col-md-3 mb-3">
                        <div className="card-body position-relative d-flex ">
                            <div className="text-icons d-inline-block">
                                <AiOutlineDollar />
                            </div>
                            <div className="text d-inline-block">
                                <h6 className="card-title">Special title treatment</h6>
                                <p className="card-text">With supporting text belowa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card-body position-relative d-flex ">
                            <div className="text-icons d-inline-block">
                                <AiFillCreditCard />
                            </div>
                            <div className="text d-inline-block">
                                <h6 className="card-title">Special title treatment</h6>
                                <p className="card-text">With supporting text belowa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card-body position-relative d-flex ">
                            <div className="text-icons d-inline-block">
                                <FaCarSide />
                            </div>
                            <div className="text d-inline-block">
                                <h6 className="card-title">Special title treatment</h6>
                                <p className="card-text">With supporting text belowa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card-body position-relative d-flex ">
                            <div className="text-icons d-inline-block">
                                <AiOutlineFieldTime />
                            </div>
                            <div className="text d-inline-block">
                                <h6 className="card-title">Special title treatment</h6>
                                <p className="card-text">With supporting text belowa</p>
                            </div>
                        </div>
                    </div>

                </div>




                <div className="rek row"

                    style={{
                        backgroundImage: `url("https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2018/02/cover-8.jpg")`
                    }}

                >
                    <div className="col-md-6 px-5 py-4 teps">
                        <p>IS IT TIME FOR A</p>
                        <h1>Modern Room</h1>
                    </div>
                    <div className="col-md-6 px-5 py-4 text-center">
                        <div className="left-big-text2">
                            <div className="redi">
                                <h3 className="one-text">EXCLUSIVE CUPON</h3><br />
                                <span>UP TO</span>
                                <h3 className="one-text2">$200</h3>
                                <p className="offf2">OFF</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="Product">
                    <div className='container'>
                        <div className='row'>
                            {
                                prod.map((item, index) => {
                                    return (
                                        <div className='col-12 col-md-3' key={index}>
                                            <div className="card cardaaa">
                                                <div className='cardImage'>
                                                    <Link to='/proCard'>
                                                        <img onClick={() => getDanniy(item)} src={`${Url}/${item.files[0].filePath}`} alt="rasm" />
                                                    </Link>
                                                    <button onClick={() => View(item.files, item.name, item.price, item.title, item)} className="quickview">QUICK VIEW</button>
                                                </div>
                                                <div className='title'> <h6 className='kartaH6'>{item.category}</h6></div>
                                                <div className='prname'>{item.name}</div>
                                                <h5>UZS {new Intl.NumberFormat().format(item.price)}.00</h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {
                        model === true ? <ModalProd files={tempdata[0]} name={tempdata[1]} price={tempdata[2]} title={tempdata[3]} prod={tempdata[4]} hide={() => setModel(false)} /> : ''
                    }

                </div>



            </div>
        </>
    )
}
export default Home