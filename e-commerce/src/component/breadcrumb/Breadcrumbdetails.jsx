import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Breadcrumbdetails.css'; // Assuming you have your CSS here

function Breadcrumb({ productName }) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="breadcrumb1">

      <Link to="/">Home</Link>

     
      <span>{' > '}</span>
      <Link to="/shop">Shop</Link>

     
      {pathnames.slice(1).map((value, index) => {
        const routeTo = `/${pathnames.slice(1, index + 2).join('/')}`; // Adjust slice to skip first path
        const isLast = index === pathnames.length - 2; // Adjust index as we skip the first path
        return (
          <span key={index}>
            {' > '}
            {isLast ? (
              <span className="breadcrumb-active">{productName}</span>
            ) : (
              <Link to={routeTo}>{value}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumb;

