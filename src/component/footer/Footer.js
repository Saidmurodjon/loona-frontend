import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className="footer my-5">
                <div className="row">
                    <div className="col-md-6 fot-img">
                        <img src="https://www.portotheme.com/wordpress/porto/elementor/shop29/wp-content/uploads/sites/30/2019/07/logo_ecommerce_black.png" alt="" />
                        <h2 className='d-inline-block'>+998990028835</h2>
                    </div>
                    <div className="col-md-6 d-flex justify-content-between">
                        <div className="abot">
                            <h4 className='text-dark'>Страницы</h4>
                            <Link className='nav-items3 d-block' to="/">Дома</Link>
                            <Link className='nav-items3 d-block' to="/product">Продукты</Link>
                            <Link className='nav-items3 d-block' to="/contact">Контакт</Link>
                            <Link className='nav-items3 d-block' to="/about">О нас</Link>
                        </div>
                        <div className="abot">
                            <h4 className='text-dark'>Продукты</h4>
                            <Link className='nav-items3 d-block' to="/">Дома</Link>
                            <Link className='nav-items3 d-block' to="/product">Продукты</Link>
                            <Link className='nav-items3 d-block' to="/contact">Контакт</Link>
                            <Link className='nav-items3 d-block' to="/about">О нас</Link>
                        </div>
                        <div className="abot">
                            <h4 className='text-dark'>Pages</h4>
                            <Link className='nav-items3 d-block' to="/">Дома</Link>
                            <Link className='nav-items3 d-block' to="/product">Продукты</Link>
                            <Link className='nav-items3 d-block' to="/contact">Контакт</Link>
                            <Link className='nav-items3 d-block' to="/about">О нас</Link>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <hr />
                    <div className="col-md-12 text-center">
                        <h6 className='text-dark'>POWERED BY <a className='text-dark' href="http://technobeck.uz">TECHNOBECK TEAM</a></h6>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer