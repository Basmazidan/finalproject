import React from 'react'
import Backgroundcart from '../../component/backgroundcart/Backgroundcart'
import './Contact.css'
import ContactForm from '../../component/contactform/Contactform'
import VectorImg from '../../assets/Vector.jpg'
import phoneImg from '../../assets/bxs_phone.jpg'
import clockImg from '../../assets/bi_clock-fill.jpg'

export const Contact = () => {
 



  return (
    <>
        <Backgroundcart></Backgroundcart>
        <div className='contact-main-continer'>
        <div className='header-contact'>
          <h1>Get In Touch With Us</h1>
          <label className='label-contact-header' htmlFor="">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</label>
        </div>
        <div className='contact-middle-div'>
          <div className='Info-Continer'>
            <div className='Info-div'>
            <img className='Info-Img' src={VectorImg}  />
            <div className='Text-Div'>
              <h4 className='myh2'>Address</h4>
              <label htmlFor="">236 5th SE Avenue, New York NY10000, United States</label>
            </div>
            </div>
            <div className='Info-div'>
            <img className='Info-Img' src={phoneImg}  />
            <div className='Text-Div'>
              <h4 className='myh2'>phone</h4>
              <label htmlFor="">Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789</label>
            </div>
            </div>
            <div className='Info-div'>
            <img className='Info-Img' src={clockImg}  />
            <div className='Text-Div'>
              <h4 className='myh2'>Working Time</h4>
              <label htmlFor="">Monday-Friday: 9:00 - 22:00 <br />
              Saturday-Sunday: 9:00 - 21:00</label>
            </div>
            
            </div>
          </div>
          <div className='Inp-Continer'>
          <ContactForm/>
          </div>

        </div>
          </div>
          </>
  )
}
export default Contact
