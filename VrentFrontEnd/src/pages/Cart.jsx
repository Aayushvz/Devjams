import { useSelector } from 'react-redux';
import '../styles/Cart.css';
import ProductCard from '../components/ProductCard';
import PaymentCard from '../components/PaymentCard';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  if (cart.cart.length === 0) {
    return (
    <div className="cart-empty">Your Cart is EMPTY</div>
  );
  }

  return (
    <div className="cart-container">
      {/* Product List Section */}
      <div className="cart-products">
        <h2>Your Cart</h2>
        {cart.cart.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* Payment Section */}
      <div className="cart-payment">
        <PaymentCard />
      </div>
    </div>
  );
};

export default Cart;