import './Footer.css'
import CupImg from '../../assets/cupimg.png'
import WarrentyImg from '../../assets/warranty2.png'
import shipingImg from '../../assets/image20.svg'
import CallImg from '../../assets/callcenter.png'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <>
    <div className='Featears-Div-main'>
    <div className='Featears-Div'>
      <div className='feature-box'>
        <div><img className='img-footer-div' src={CupImg} alt="" /></div>
        <div className='text-feature-section'>
          <label className='strong-label' htmlFor="">High Quality</label>
          <label  htmlFor="">crafted from top materials</label>
        </div>
      </div>
      <div className='feature-box'>
        <div><img className='img-footer-div' src={WarrentyImg} alt="" /></div>
        <div className='text-feature-section'>
        <label className='strong-label' htmlFor="">Warranty Protection</label>
        <label  htmlFor="">Over 2 years</label>
        </div>
        </div>
      <div className='feature-box'>
        <div><img className='img-footer-div' src={shipingImg} alt="" /></div>
        <div className='text-feature-section'>
        <label className='strong-label' htmlFor="">Free Shipping</label>
        <label htmlFor="">Order over 150 $</label>
        </div>
        </div>
      <div className='feature-box'>
        <div><img className='img-footer-div' src={CallImg} alt="" /></div>
        <div className='text-feature-section'>
        <label className='strong-label' htmlFor="">24 / 7 Support</label>
        <label htmlFor="">Dedicated support</label>
        </div>
        </div>
    </div>
    </div>
    <div className='details-and-links'>
      <div className='details-links-block'>
    <div className='location-div'>
      <h3>Funiro.</h3>
      <span htmlFor="">400 University Drive Suite 200 Coral <br />
         Gables,FL 33134 USA</span></div>
      <div className='links-div'>
        <h3 id='h3-links'>links</h3>
        <Link className='footer-links' to="/" >Home</Link>
        <Link className='footer-links' to="/shop">shop</Link>
        <Link className='footer-links' to="/contact">contact</Link>
        <a className='footer-links' href="">about</a>
      </div>
      <div className='Help-div'>
      <h3 id='h3-links'>help</h3>
        <a className='footer-links' >Payment Options</a>
        <a className='footer-links' >Returns</a>
        <a className='footer-links' >Privacy Policies</a>
        
      </div>
      <div className='newsletter-div'>
      <h3 id='h3-links'>newsletter</h3>
      <div>
        <input type="text" name="" id="" />
          <a className='footer-links' href="">subscribe</a>
      </div>
      </div>
      </div>
      <div className='bottomfooter'>
        <h6>2023 furino. All rights reverved</h6>
      </div>
    </div>
    </>
  )
}
export default Footer
