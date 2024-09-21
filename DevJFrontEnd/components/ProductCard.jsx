import React, { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleDelete = () => {
    // Logic to remove item from cart
    console.log('Item removed from cart');
  };

  return (
    <div className="product-card-container">
      <img src={product.image} alt={product.name} className="product-card-image" />
      <div className="product-card-details">
      <div className="product-card-title">{product.name}</div>
      <div className="product-card-description">{product.description}</div>
      </div>
      <div className="product-price-delete">
      <div className="product-card-price">${product.price}</div>
        <button onClick={handleDelete} className="delete-btn">🗑️</button>
      </div>
    </div>
  );
};

export default ProductCard;
