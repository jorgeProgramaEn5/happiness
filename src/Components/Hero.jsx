// import { bici_mtb, bici_paseo, bici_ruta, } from '../Assets';
import '../styles/Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

function carrusel({ banners }) {
  return (
    <Carousel className='contenedor_carusel'>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
        <div className="m-imagen">
          <img
            className="imagen"
            alt="171x180"
            src={banner.icon}
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default carrusel;