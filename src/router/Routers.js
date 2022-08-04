import { Routes, Route } from 'react-router-dom'
import Navbar from '../component/navbar/Navbar'
import Home from '../view/Home/Home'
import Footer from '../component/footer/Footer'
import LoginPage from '../AdminPanel/LoginPage'
import AddProductAdmin from '../AdminPanel/AddProductAdmin'
import UserAdm from '../AdminPanel/UserAdm'
import ContactAdm from '../AdminPanel/ContactAdm'

import Product from '../view/Product/Product'
import CardPage from '../view/Carts/Card'
import { CartProvider } from 'react-use-cart'
import Tavsif from '../view/Product/perProduct'
import About from '../view/About/About'
import Contact from '../view/contact/Contact'
import EditAdmin from '../AdminPanel/EditAdmin'

function Routers() {
    return (
        <>
           
                <CartProvider>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* adminPanel */}
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/addProduct" element={<AddProductAdmin />} />
                        <Route path="/editProduct/:id" element={<EditAdmin />} />
                        <Route path="/userAdm" element={<UserAdm />} />
                        <Route path="/contactAdm" element={<ContactAdm />} />
                        {/* asosiy */}
                        <Route path="/product" element={<Product />} />
                        <Route path="/carts" element={<CardPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/proCard" element={<Tavsif />} />
                    </Routes>

                    <Footer />
                </CartProvider>
            
        </>
    )
}

export default Routers