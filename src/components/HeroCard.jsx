import "../styles/HeroCard.css";
import PropTypes from 'prop-types';

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

HeroCard.propTypes = {
  product: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }).isRequired
};