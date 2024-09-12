
import { useParams } from 'react-router-dom'
import React, { useEffect, useState, } from 'react';

import './Singleproduct.css'
import SidebarCart from '../../component/sidecart/Sidecart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faEmptyStar } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../component/cartcontext/Cartcontext';
import Breadcrumb from '../../component/breadcrumb/Breadcrumbdetails';



export const Singleproduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { addToCart } = useCart()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  // 
  const handleAddToCart = () => {
    addToCart(product); // Use context function to add to cart
    setIsCartVisible(true); // Show sidebar cart if necessary
  };
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars).fill().map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color="#ffd700" />
        ))}
        {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} color="#ffd700" />}
        {Array(emptyStars).fill().map((_, index) => (
          <FontAwesomeIcon key={index + fullStars} icon={faEmptyStar} color="#ddd" />
        ))}
      </>
    );
  };


  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }




  return (
    <>
    <div className='header-singleproduct'>
    <Breadcrumb  productName={product.title} />
    </div>
    <div className='main-singleproduct'>
      <div className='product-details'>
      <div className={`product-details2 ${isCartVisible ? 'faded' : ''}`}>
      <div className="item-image">
      <img className='image-single' src={product.image} alt={product.title} />
    </div>
    <div className="product-info">

      <h1>{product.title}</h1>
      <p className="price">RS.{product.price}</p>
      <div className="rating">
      {renderStars(product.rating.rate)}
        </div>
      

      <div className="quantity-selector">
        <div className='counter-div'>
        <button className="selectorbtn" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
        <span>{quantity}</span>
        <button className="selectorbtn" onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <div>
        <button className='add-to-cart' onClick={handleAddToCart}>Add to Cart</button>
      </div>

      </div>
      
      <div className="tabs">
        <button className="tab active">Description</button>
      </div>
      <div className="tab-content">
        <p>{product.description}</p>
      </div>
    </div>
    </div>

    {isCartVisible && <SidebarCart cart={cart} />} 
    {isCartVisible && <div className="overlay"></div>}
  </div>
  </div>
  </>
  
  );
}
export default Singleproduct
