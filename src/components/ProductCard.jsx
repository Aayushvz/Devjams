import PropTypes from 'prop-types';
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const handleDelete = () => {
    // Logic to remove item from cart
    console.log("Item removed from cart");
  };

  return (
    <div className="product-card-container">
      <img
        src={product.imgurl}
        alt={product.ProductName}
        className="product-card-image"
      />
      <div className="product-card-details">
        <div className="product-card-title">{product.ProductName}</div>
        <div className="product-card-description">{product.Description}</div>
      </div>
      <div className="product-price-delete">
        <div className="product-card-price">${product.Rate}</div>
        <button onClick={handleDelete} className="delete-btn">
          🗑️
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    imgurl: PropTypes.string.isRequired,
    ProductName: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }).isRequired
};

export default ProductCard;
