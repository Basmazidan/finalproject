import React from 'react';

import Backgroundcart from '../../component/backgroundcart/Backgroundcart'
import './Cart.css'
import { useCart } from '../../component/cartcontext/Cartcontext'; 

const Cart = () => {

    const { cart } = useCart();
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    console.log(cart);
    


    return (
        <>
        <Backgroundcart></Backgroundcart>

        <div className='main-cart'>
            <div className='main-wrapper'>
            <div className='header-cart'>
                <label htmlFor="">product image</label>
                <label htmlFor="">Product title</label>
                <label htmlFor="">Price</label>
                <label htmlFor="">Quantity</label>
                <label htmlFor="">Subtotal</label>
            </div>

            {/* Loop through each item in the cart */}
            {cart.map((item, index) => (
                

                <div className='product-cart' key={item.id || `${item.title}-${index}`}>
                <img className='imgcart' src={item.image} alt={item.title} />
                    <div className='info-for-product'>
                        <div className='product-label'>
                        <label>{item.title}</label>
                        </div>
                        <div className='product-label2'>
                        <label>{item.price}</label>
                        </div>
                        <div className='product-label2'>
                        <label htmlFor="">Rs. {item.price * item.quantity}</label> 
                        </div>
                        <div className='product-label2'>
                        <label id='subtotal-label' htmlFor="">Rs{item.price}</label>
                        </div>
                    </div>
                </div>

                 
            ))}
            
</div>
            {/* Cart totals section */}
            {cart.length > 0 && (
                <div className='cart-subtotal'>
                    <h1>Cart Totals</h1>
                    
                    <div className='div-subtotal-price'>
                        <label htmlFor="">Subtotal</label>
                        <span id='firstspan'>Rs. {subtotal}</span>
                    </div>
                    <div className='div-total-price'>
                        <label htmlFor="">Total</label>
                        <span id='secondspan'>Rs. {subtotal}</span> {/* Assuming total = subtotal for now */}
                    </div>
                    <button id='check-btN'>Check out</button>
                </div>
            )}

            {/* If the cart is empty */}
            {cart.length === 0 && (
                <p>Your cart is empty</p>
            )}
            
        </div>
    
        </>
    );
};

export default Cart;
