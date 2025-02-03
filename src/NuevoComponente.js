// src/NuevoComponente.js
import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li style={{ display: 'inline-block', margin: '0 15px' }}><a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</a></li>
        <li style={{ display: 'inline-block', margin: '0 15px' }}><a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</a></li>
        <li style={{ display: 'inline-block', margin: '0 15px' }}><a href="#services" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Services</a></li>
        <li style={{ display: 'inline-block', margin: '0 15px' }}><a href="#contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</a></li>
      </ul>
    </nav>
  );
}

function NuevoComponente() {
  return (
    <div>
      <Navbar />
      <h2>Este es el nuevo componente</h2>
    </div>
  );
}

export default NuevoComponente;
