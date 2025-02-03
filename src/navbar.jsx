// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={() => alert('Botón presionado')}>Nuevo Botón</button>
    </nav>
  );
};

export default Navbar;
