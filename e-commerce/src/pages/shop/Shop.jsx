import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom'
import backgroundImage from '../../assets/image27.jpg'
import './Shop.css'
import { Link } from 'react-router-dom'
useState



export const Shop = () => {

  const { category  } =useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();
  const productsPerPage = 5;


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        if (category) {
          const filtered = json.filter(product => product.category === category);
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(json);
        }
      });
  }, [category]);

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Next and Previous page
  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredProducts.length / productsPerPage)));
    }
  };

  const prevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  const handleButtonClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleImageClick = (id) => {
    setShowButton(prevState => ({ ...prevState, [id]: true }));
  };


  return (
<>
    <div className='shop-continer'>
      <div className='shop-wrapper'  style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1>Shop</h1>
      <h3>{category ? `home > ${category} 'shop` : 'All Products'}</h3>
      </div>
    
    <div className='shop-product'  >
      {currentProducts.map(product => (
        <div key={product.id} className='Card-continer' onClick={() => handleImageClick(product.id)} >
          <img src={product.image} alt={product.title} style={{ width: '100%',height:'50%' }} />
          <h2 className='Header-Title'>{product.title}</h2>
          {/* <p>{product.description}</p> */}
          <p className='Paragraph-price'>${product.price}</p>
          {showButton[product.id] && (
              <button className='button-details' onClick={() => handleButtonClick(product.id)}>More details</button>
            )}
        </div>
      ))}
    </div>
    


  </div>
      <div className='pagination'>
      <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
          <button onClick={() => paginate(1)}>1</button>
          <button onClick={() => paginate(2)}>2</button>
          <button onClick={() => paginate(3)}>3</button>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}>Next</button>
        </div>
  

        </>
  


  );
}
export default Shop
