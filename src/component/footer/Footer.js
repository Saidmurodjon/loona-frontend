import './Footer.css'
import photo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {BsTelegram, BsInstagram,BsFacebook,BsYoutube,BsTelephoneFill} from 'react-icons/bs'
function Footer ()
{
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 fot-img">
                        <img className='fot-img2' src={ photo } alt="loona" />
                        <h2 className='d-inline-block'><a href='tel:+998555002050'><BsTelephoneFill size={25} className='tel'/>(55)500-20-50</a></h2>
                    </div>
                    <div className="col-md-7">
                        <div className="row d-flex justify-content-center">
                            <div className="abot col-md-3 text-center m-2">
                                <h4 className='text-dark'>Страницы</h4>
                                <Link className='nav-items3 d-block' to="/">Дома</Link>
                                <Link className='nav-items3 d-block' to="/product">Продукты</Link>
                                <Link className='nav-items3 d-block' to="/contact">Контакт</Link>
                                <Link className='nav-items3 d-block' to="/about">О нас</Link>
                            </div>
                            <div className="abot col-md-3 text-center m-2">
                                <h4 className='text-dark'>Продукты</h4>
                                <Link className='nav-items3 d-block' to="/">Мебель</Link>
                                <Link className='nav-items3 d-block' to="/product">Светильники</Link>
                                <Link className='nav-items3 d-block' to="/contact">Декор</Link>
                                
                            </div>
                            <div className="abot col-md-3 text-center m-2">
                                <a href="https://t.me/loona_uz" className='ijtimoiy'>
                                    <BsTelegram size={20}/> Telegram
                                </a> 
                                <a href="https://www.instagram.com/loona_uz/?igshid=YmMyMTA2M2Y%3D" className='ijtimoiy'>
                                    <BsInstagram size={20}/> Instagram
                                </a>
                                <a href="https://www.facebook.com/loonauz/" className='ijtimoiy'>
                                    <BsFacebook size={20}/> Facebook
                                </a>
                                <a href="https://www.youtube.com/channel/UCfOYU3U-Tll6AeZ6aFVI8Ig" className='ijtimoiy'>
                                    <BsYoutube size={20}/> Youtube
                                </a>
                            </div>
                            <div className="engPast">
                                <h3>Loona</h3>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer