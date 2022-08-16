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
  const View = (files, name, price, title,prod,category) => {
    let tempData = [files, name, price, title , prod ,category ]
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
                                    className="d-block w-100 imgWid h-100"
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
                    <h2>{new Intl.NumberFormat().format(saved.price)}.00 УЗС</h2>
                    <p>
                        {saved.title}
                    </p>
                    <h6 className='kategory'><span className='sku-wrapper'>КАТЕГОРИИ:</span> {saved.category}</h6>
                    <hr />
                   
                    <button onClick={() =>addItem(saved)} className='addToCart'>ДОБАВИТЬ В КОРЗИНУ</button>
                    <hr />
                </div>
                
            </div>
        </div>
        <h2 className='relProd'>СОПУТСТВУЮЩИЕ ТОВАРЫ</h2>
        <div className='releProd row'>
            {
                baza.map((item, index)=>{
                    return(
                        <div className='col-12 col-md-3' key={index}>
                            <div className="card cardaaa">
                                <div className='cardImage'>
                                    <img  src={`${Url}/${item.files[0].filePath}`} alt="rasm" />
                                <button onClick={() => View(item.files, item.name, item.price, item.title,item , item.category)} className="quickview">БЫСТРЫЙ ПРОСМОТР</button>
                                </div>
                                <div className='title'> <h6 className='kartaH6'>{item.category}</h6></div>
                                <div className='prname'>{item.name}</div>
                                <h5>УЗС {new Intl.NumberFormat().format(item.price)}.00</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="container sMod">
            {
                model === true ? <ModalProd files={tempdata[0]} name={tempdata[1]} price={tempdata[2]} category={tempdata[5]} title={tempdata[3]} prod={tempdata[4]} hide={() => setModel(false)} /> : ''
            }
        </div>
    </div>
  )
}

export default Tavsif