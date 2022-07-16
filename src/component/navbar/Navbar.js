import './Navbar.css'
import { HiOutlineUser } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import {ImCancelCircle} from 'react-icons/im'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "react-use-cart";

function Navbar() {
    const {
        items

      } = useCart();

    const [tog , setTog] = useState(true)
    const Toggle = () => {
        setTog(!tog)
    }


    return (
        <>
            <div className="menu row justify-content-between align-items-center ">
                <div  className="col-md-4 foo d-lg-none">
                    <GiHamburgerMenu  onClick={() => Toggle()} />
                </div>
                <div className="items-navbar col-md-4">
                    <ul >
                        <Link className='nav-items' to="/">Дома</Link>
                        <Link className='nav-items' to="/product">Продукты</Link>
                        <Link className='nav-items' to="/contact">Контакт</Link>
                        <Link className='nav-items' to="/about">О нас</Link>
                    </ul>
                </div>
                <div className="logo col-md-4 text-center">
                    <img className='pt-3' src="https://www.portotheme.com/wordpress/porto/elementor/shop29/wp-content/themes/porto/images/logo/logo_ecommerce_black.png" alt="" />
                </div>
                <div className="admin col-md-4 d-flex justify-content-end">
                    <div className="admin-icon">
                        <Link className='text-dark' to="/login"><HiOutlineUser  /></Link>
                    </div>
                    <div className="card-icon">
                        <p className='count'>{items.length}</p>
                        <Link className='text-dark' to="/carts"> <BsCart4 /></Link>
                    </div>

                </div>

                <div className="menu2"
                    style={{
                        width:tog?"0":"70%",height:tog?"0":"150%",top:tog?"0":"",zIndex:tog?"-1":"1"
                    }}
                >
                    <ul >
                        <Link className='nav-items2 cancel' to="/">
                            <ImCancelCircle onClick={() =>Toggle()} />
                        </Link>
                        <Link className='nav-items2' to="/">Дома</Link>
                        <Link className='nav-items2' to="/product">Продукты</Link>
                        <Link className='nav-items2' to="/contact">Контакт</Link>
                        <Link className='nav-items2' to="/about">О нас</Link>
                    </ul>
                </div>
            </div>




        </>
    )

}

export default Navbar