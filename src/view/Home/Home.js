import { AiOutlineDollar, AiFillCreditCard, AiOutlineFieldTime } from "react-icons/ai"
import { FaCarSide } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import ModalProd from "../Product/ModalProd"
import { Link } from 'react-router-dom'
import Url from "../../config"
import Carousel from 'carousel-react-rcdev'
import axios from "axios"
import './Home.css'
function Home ()
{
    const [ prod, setProd ] = useState( [] )
    const [prod2, setProd2] = useState( [] )
    const [fill , setFill] = useState([])
    useEffect( () =>{
        async function Demo ()
        {
            let res = await axios( `${Url}/product/sendHome` )
            setProd( res.data[0].slice(0,4) )
            setProd2(res.data[0].slice(4,12))
            setFill(res.data)
        }
        Demo()
    }, [] )
   

    const [ tempdata, setTempData ] = useState( [] )

    const [ model, setModel ] = useState( false );
    const View = ( files, name, price, title, prod,category ) =>{
        let tempData = [ files, name, price, title, prod ,category]
        setTempData( item => [ ...tempData ] )
        return setModel( true )
    }

    const getDanniy = ( item ) => {
        localStorage.setItem( 'user', JSON.stringify( item ) )
    }

    const Filter = (category) => {
        if(category == "Мебель"){
            setProd( fill[0].slice(0,4) )
            setProd2(fill[0].slice(4,12))
        }
        if(category == "Светильники"){
            setProd( fill[1].slice(0,4) )
            setProd2(fill[1].slice(4,12))
        }
        if(category == "Декор"){
            setProd( fill[2].slice(0,4) )
            setProd2(fill[2].slice(4,12))
        }
    }



    return (
        <>
            <div className="container">
                <p className="engtepa mt-3">Получите 10% СКИДКУ на LOONA — покупайте прямо сейчас!</p>
                <div className="content-home">
                    <div className="top-bar">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="img-topp position-relative">
                                    <img src="./home/kotta1.png" alt="" className="onnn"/>
                                    <Link to="/product" className="shoppingButton1">КУПИТЬ СЕЙЧАС→</Link>
                                </div>

                                <div className="img-bottom d-flex justify-content-between mt-3">
                                    <div className="left-img">
                                        <img src="./home/2-1.png" alt="" />
                                    </div>
                                    <div className="right-img">
                                        <img src="./home/2-2.png" alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-7 right-big position-relative">
                                <img src="./home/kotta2.png" alt="" />
                                <Link to="/product" className="shoppingButton2">КУПИТЬ СЕЙЧАС→</Link>
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
                                <h6 className="card-title">Особая обработка титула</h6>
                                <p className="card-text">С вспомогательным текстом ниже</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card-body position-relative d-flex ">
                            <div className="text-icons d-inline-block">
                                <AiFillCreditCard />
                            </div>
                            <div className="text d-inline-block">
                                <h6 className="card-title">Особая обработка титула</h6>
                                <p className="card-text">С вспомогательным текстом ниже</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card-body position-relative d-flex ">
                            <div className="text-icons d-inline-block">
                                <FaCarSide />
                            </div>
                            <div className="text d-inline-block">
                                <h6 className="card-title">Особая обработка титула</h6>
                                <p className="card-text">С вспомогательным текстом ниже</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card-body position-relative d-flex ">
                            <div className="text-icons d-inline-block">
                                <AiOutlineFieldTime />
                            </div>
                            <div className="text d-inline-block">
                                <h6 className="card-title">Особая обработка титула</h6>
                                <p className="card-text">С вспомогательным текстом ниже</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="Product">
                <div className='container'>
                    <div className="row d-flex justify-content-end my-5 text-center">
                        <div className="col-md-2 col-xs-2 yanam" onClick={()=>Filter("Мебель")}>
                        <p>Мебель</p>  
                        </div>
                        <div className="col-md-2 col-xs-2 yanam" onClick={()=>Filter("Светильники")}>
                         <p>Светильники</p> 
                        </div>
                        <div className="col-md-2 col-xs-2 yanam" onClick={()=>Filter("Декор")}>
                          <p>Декор</p>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            prod.map( ( item, index ) =>
                            {
                                return (
                                    <div className='col-12 col-md-3' key={ index }>
                                        <div className="card cardaaa">
                                            <div className='cardImage'>
                                                <Link to='/proCard'>
                                                    <img onClick={ () => getDanniy( item ) } src={ `${ Url }/${ item.files[ 0 ].filePath }` } alt="rasm" />
                                                </Link>
                                                <button onClick={ () => View( item.files, item.name, item.price, item.title, item ,item.category) } className="quickview">БЫСТРЫЙ ПРОСМОТР</button>
                                            </div>
                                            <div className='title'> <h6 className='kartaH6'>{ item.category }</h6></div>
                                            <div className='prname'>{ item.name }</div>
                                            <h5>УЗС { new Intl.NumberFormat().format( item.price ) }.00</h5>
                                        </div>
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>
                {
                    model === true ? <ModalProd files={ tempdata[ 0 ] } name={ tempdata[ 1 ] } category={tempdata[5]} price={ tempdata[ 2 ] } title={ tempdata[ 3 ] } prod={ tempdata[ 4 ] } hide={ () => setModel( false ) } /> : ''
                }

            </div>



            <div className="rek row"

                style={ {
                    backgroundImage: `url("https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2018/02/cover-8.jpg")`
                } }

            >
                <div className="col-md-6 px-5 py-4 teps">
                    <p>ПРИШЛО ВРЕМЯ ДЛЯ</p>
                    <h1 className="mb-4">Современный номер</h1>
                    <Link to="/product" className="shoppingButton3">КУПИТЬ СЕЙЧАС→</Link>
                </div>
                <div className="col-md-6 px-5 py-4 text-center">
                    <div className="left-big-text2">
                        <div className="redi">
                            <h3 className="one-text">ЭКСКЛЮЗИВНЫЙ КУБОК</h3><br />
                            <span>ВПЛОТЬ ДО</span>
                            <h3 className="one-text2">$200</h3>
                            <p className="offf2">ВЫКЛЮЧЕННЫЙ</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="Product my-5">
                <div className='container'>
                    <div className='row'>
                        {
                            prod2.map( ( item, index ) =>{
                                return (
                                    <div className='col-12 col-md-3' key={ index }>
                                        <div className="card cardaaa">
                                            <div className='cardImage'>
                                                <Link to='/proCard'>
                                                    <img onClick={ () => getDanniy( item ) } src={ `${ Url }/${ item.files[ 0 ].filePath }` } alt="rasm" />
                                                </Link>
                                                <button onClick={ () => View( item.files, item.name, item.price, item.title, item ,item.category) } className="quickview">БЫСТРЫЙ ПРОСМОТР</button>
                                            </div>
                                            <div className='title'> <h6 className='kartaH6'>{ item.category }</h6></div>
                                            <div className='prname'>{ item.name }</div>
                                            <h5>УЗС { new Intl.NumberFormat().format( item.price ) }.00</h5>
                                        </div>
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>
                {
                    model === true ? <ModalProd files={ tempdata[ 0 ] } name={ tempdata[ 1 ] } category={tempdata[5]} price={ tempdata[ 2 ] } title={ tempdata[ 3 ] } prod={ tempdata[ 4 ] } hide={ () => setModel( false ) } /> : ''
                }

            </div>
            

            <div className="homiylar">
                <Carousel>
                    <img  width="200px" height="50px" className="mx-5"  src='./home/1.png' alt='imagem' title='imagem' />
                    <img  width="200px" height="50px" className="mx-5"  src='./home/2.png' alt='imagem' title='imagem' />
                    <img  width="200px" height="50px" className="mx-5"  src='./home/3.png' alt='imagem' title='imagem' />
                    <img  width="200px" height="50px" className="mx-5"  src='./home/4.png' alt='imagem' title='imagem' />
                    <img  width="200px" height="50px" className="mx-5"  src='./home/5.png' alt='imagem' title='imagem' />
                </Carousel>
            </div>



        </>
    )
}
export default Home