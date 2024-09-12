import React, { useState ,useEffect } from 'react'
import DecortionImg from '../../assets/scandinavian-interior-mockup-wall-decal-background 1.jpg'
import electronicsImg from '../../assets/collection-consumer-electronics-flying-air-260nw-738107467.jpg'
import jeweleryImg  from '../../assets/image2.jpg'
import mensClothingImg from '../../assets/image4.jpg' 
import womensClothingImg from '../../assets/max0256059_bei_00.webp'
import "./Home.css"
import { Link } from 'react-router-dom'
export const Home = () => {
  const [categories, setCategories] = useState([

  ]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => {
        const categoriesWithIdsAndImages = json.map((category, index) => {
          let img;
          switch (category) {
            case 'electronics':
              img = electronicsImg;
              break;
            case 'jewelery':
              img = jeweleryImg;
              break;
            case 'men\'s clothing':
              img = mensClothingImg;
              break;
            case 'women\'s clothing':
              img = womensClothingImg;
              break;
            default:
              img = 'defaultImage.jpg'; // Use a default image if needed
          }
          return {
            id: index + 1,
            name: category,
            img: img
          };
        });
        setCategories(categoriesWithIdsAndImages);
      });
  }, []);





  return (
    <div className='Home-Wrapper'>
      <div className='Img-wrapper'>
        <img id='Img-wrapper1' src={DecortionImg} alt="" />
      </div>
      <div className='Categories'>
      <h2>Categories</h2>
      <div className='Categories-wrapper'>
      {categories.map(category => (
              <Link className='category-link' to={`/shop/${category.name}`}key={category.id}>
              <div className='Categories-Continer' >
              <img src={category.img} alt={category.name} />
              <label className='categories-label' htmlFor="">{category.name}</label>
              </div>
              </Link>
        ))}
        </div>
      </div>
    </div>
  )
}
export default Home
