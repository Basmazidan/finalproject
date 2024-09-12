import './Layoutpage.css'
import { Link  } from 'react-router-dom';
import logo from "../../assets/Meubel House_Logos-05.jpg"
import FurniroImg from "../../assets/SkinClinic.png"
import cart from "../../assets/ant-design_shopping-cart-outlined.png"
import { Outlet } from 'react-router-dom';
Footer
import React from 'react';
import Footer from '../../component/footer/Footer'

export const Layoutpage = () => {
  return (
    <>
    <nav>
    <div className="Logo-Continer">
        <img id='Img-logo1' src={logo} alt="" />
        <img id='Img-logo2' src={FurniroImg} alt="" />
    </div>
  <ul>
    <li>
      <Link className="links" to="/">home</Link>
    </li>
    <li>
      <Link  className="links"  to="/shop">shop</Link>
    </li>
    <li>
      <Link className="links" to="/contact">contact</Link>
    </li>
  </ul>
  <div className="avatar-Continer">
    <Link to="/Cart">
    <img id="imgcart" src={cart} alt="" />
    </Link>

  </div>
  
</nav>

<Outlet />
<Footer></Footer>
</>
  )
}
export default Layoutpage
