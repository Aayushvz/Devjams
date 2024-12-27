import React from 'react';
import "../styles/HeroCard.css";

export default function HeroCard({ product }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <div className="product-title">{product.title}</div>
        <div className="product-price">Price - {product.price}</div>
      </div>
    </div>
  );
}