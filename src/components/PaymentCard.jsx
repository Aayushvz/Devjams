import '../styles/PaymentCard.css';

const PaymentCard = () => {
  return (
    <div className="payment-card">
      <div className="header">
        <h2>Card Details</h2>
        {/* <img
          src="https://randomuser.me/api/portraits/men/1.jpg" // Replace with actual user image
          alt="User"
          className="user-image"
        /> */}
      </div>
      
      <div className="card-type-section">
        <h4>Card type</h4>
        <div className="card-types">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="MasterCard" className="card-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="card-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/RuPay_logo.svg/1200px-RuPay_logo.svg.png" alt="RuPay" className="card-logo" />
          <button className="see-all-btn">See all</button>
        </div>
      </div>

      <div className="input-group">
        <label>Name on card</label>
        <input type="text" placeholder="Name" />
      </div>

      <div className="input-group">
        <label>Card Number</label>
        <input type="text" placeholder="1111 2222 3333 4444" />
      </div>

      <div className="expiration-cvv">
        <div className="input-groupc">
          <label>Expiration date</label>
          <input type="text" placeholder="mm/yy" />
        </div>
        <div className="input-groupc">
          <label>CVV</label>
          <input type="text" placeholder="123" />
        </div>
      </div>

      <hr />

      <div className="summary">
        <div className="summary-item">
          <span>Subtotal</span>
          <span>$1,072</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>$4</span>
        </div>
        <div className="summary-item total">
          <span>Total (Tax incl.)</span>
          <span>$1,076</span>
        </div>
      </div>

      <div className="checkout-section">
        <input type="text" value="230" className="discount-code" />
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default PaymentCard;
