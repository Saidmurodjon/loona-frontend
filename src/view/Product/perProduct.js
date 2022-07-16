import React, {useState, useEffect} from 'react'
import './perProduct.css'
import axios from 'axios'
import { Carousel } from "react-bootstrap";
import {useCart} from 'react-use-cart' 
import ModalProd from './ModalProd'
import Url from '../../config'
function Tavsif() {
    const { addItem} = useCart()
    const saved = JSON.parse(localStorage.getItem("user"));

    
    const [baza, setBaza] = useState([]);
  useEffect(() => {
    async function Demo() {
        const res = await axios.get(`${Url}/product`);
        let filt = res.data.filter((item)=>{
            return item._id!=saved._id&&item.category===saved.category
        })
        setBaza(filt)
    }
    Demo()
  }, []);

  const [tempdata, setTempData] = useState([])
  const [model, setModel] = useState(false);
  const View = (files, name, price, title,prod) => {
    let tempData = [files, name, price, title , prod ]
    setTempData(item => [...tempData])
    return setModel(true)


  }


  return (
    <div className='container-fluid perProduct'>
        <div className='mod'>
            <div className='row'>
                <div className='col-md-4 col-12'>
                    <Carousel variant="dark" className="caruselpht">
                        {
                            saved.files.map((item) => {
                            return (
                                <Carousel.Item>
                                <img
                                    className="d-block w-100 imgWid"
                                    src={`${Url}/${item.filePath}`}
                                    alt={item}
                                />
                                </Carousel.Item>
                            )
                            })
                        }
                    </Carousel>
                </div>
                <div className='col-md-7 col-12 tavsifi'>
                    <h1>{saved.name}</h1>
                    <h2>{saved.price}.00 UZS</h2>
                    <p>
                        {saved.title}
                    </p>
                    <h6 className='kategory'><span className='sku-wrapper'> CATEGORIES:</span> {saved.category}</h6>
                    <hr />
                   
                    <button onClick={() =>addItem(saved)} className='addToCart'>Add to cart</button>
                    <hr />
                </div>
                
            </div>
        </div>
        <h2 className='relProd'>RELATED PRODUCTS</h2>
        <div className='releProd row'>
            {
                baza.map((item, index)=>{
                    return(
                        <div className='col-12 col-md-3' key={index}>
                            <div className="card cardaaa">
                                <div className='cardImage'>
                                    <img  src={`${Url}/${item.files[0].filePath}`} alt="rasm" />
                                <button onClick={() => View(item.files, item.name, item.price, item.title,item)} className="quickview">QUICK VIEW</button>
                                </div>
                                <div className='title'> <h6 className='kartaH6'>{item.category}</h6></div>
                                <div className='prname'>{item.name}</div>
                                <h5>UZS {item.price}.00</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="container sMod">
            {
                model === true ? <ModalProd files={tempdata[0]} name={tempdata[1]} price={tempdata[2]} title={tempdata[3]} prod={tempdata[4]} hide={() => setModel(false)} /> : ''
            }
        </div>
    </div>
  )
}

export default Tavsif