import './Footer.css'
import photo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className="footer my-5">
                <div className="row">
                    <div className="col-md-6 fot-img">
                        <img className='fot-img2' src={photo} alt="loona" />
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
                            <h4 className='text-dark'>Наши сотрудники:</h4>
                            <Link className='nav-items3 d-block' to="/">KAPITALBANK</Link>
                            <Link className='nav-items3 d-block' to="/">MIMAR group</Link>
                            <Link className='nav-items3 d-block' to="/">Innovatsiya vazirligi</Link>
                            <Link className='nav-items3 d-block' to="/">Imzo</Link>
                            <Link className='nav-items3 d-block' to="/">Minerva City</Link>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <hr />
                    <div className="col-md-12 text-center">
                        {/* <h6 className='text-dark'>POWERED BY <a className='text-dark' href="http://technobeck.uz">TECHNOBECK TEAM</a></h6> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer