import React from 'react';
import './Sidecart.css'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../component/cartcontext/Cartcontext'; 


const SidebarCart = () => {
    

    // const goToCartPage = () => {
    //     navigate('/cart', { state: { cart } });z
    // };
    const { cart,removeFromCart } = useCart();  // Access the addToCart function from context
    const navigate = useNavigate();


    const goToCartPage = () => {
      navigate('/cart');
    };
    const calculateSubtotal = () => {
      return cart.reduce((total, item) => total + item.price, 0);
    };
  return (
    <div className="sidebar-cart">
      
      <h2>Shopping Cart</h2>
      <hr style={{ width: "100%" }} />
      {cart && cart.length > 0 ? (
          <>
        {cart.map((item, index) => (
          
          <div className='sidecartinfo' key={index}>
            <div>
            <img src={item.image} alt={item.title} />
            </div>
            <div className='cart-info-product'>
              <label>{item.title}</label>
              <label id='pricelabel'>1 x Rs. {item.price.toLocaleString()}</label>
            </div>
            <div>
              <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                &times; 
              </button>
              </div>
          </div>
          

          
        ))}
        <div className="cart-subtotal1">
            <span>Subtotal</span>
            <span className="subtotal-price">Rs. {calculateSubtotal().toLocaleString()}</span>
          </div>
          <hr style={{ width: "100%" }} />
          <button onClick={goToCartPage} className="go-to-cart">cart</button> {/* Button */}
          
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default SidebarCart;
