import React from 'react';
import { useLocation,Link } from 'react-router-dom';
import './Backgroundcart.css'; // Assuming you have your CSS here

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="breadcrumb">
      <span>Home</span>
      {pathnames.map((value, index) => (
        <span key={index}>
          {' > '}
          {value}
        </span>
      ))}
    </div>
  );
}

function Backgroundcart() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const currentPath = pathnames[pathnames.length - 1] || 'Home';

  return (
    <div className="cart-page">
      <div className="cart-icon">

      </div>
      <h2>{currentPath}</h2>
      <Breadcrumb />
    </div>
  );
}

export default Backgroundcart;
