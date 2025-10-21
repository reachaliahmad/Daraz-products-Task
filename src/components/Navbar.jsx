import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const categories = [
    'Electronics',
    'Fashion',
    'Home & Living',
    'Sports & Outdoors',
    'Health & Beauty',
    'Groceries',
    'Automotive',
    'Books'
  ];

  return (
    <nav className="navbar">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
