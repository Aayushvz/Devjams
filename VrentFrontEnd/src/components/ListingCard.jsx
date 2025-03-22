/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "../styles/ListingCard.css";

export default function ListingCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="listing-card-container">
      <div className="listing-card">
        <div className="listing-card-content">
          <img
            className="listing-card-img"
            src={product.imgurl}
            alt="Product"
          />
          <div className="listing-card-svg-container">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#3B3A3A" />
              <path
                d="M16.9494 11.1769L16.9489 11.1774L16.2893 11.8571L15.5717 12.5966L14.854 11.8571L14.1945 11.1774L14.1933 11.1762C12.8361 9.77305 10.7006 9.60485 9.31364 10.7863L16.9494 11.1769ZM16.9494 11.1769C18.3105 9.77247 20.4431 9.60518 21.8297 10.7863L16.9494 11.1769ZM22.0887 16.2908L22.0889 16.2906C23.578 14.7538 23.4871 12.201 21.8298 10.7864L22.0887 16.2908ZM22.0887 16.2908L15.6102 22.9802C15.6005 22.9902 15.5929 22.9943 15.5879 22.9964C15.5822 22.9988 15.5762 23 15.57 23C15.5638 23 15.5578 22.9988 15.5521 22.9964C15.5471 22.9943 15.5395 22.9902 15.5298 22.9802L9.05174 16.2912C9.05164 16.2911 9.05155 16.291 9.05146 16.2909M22.0887 16.2908L9.05146 16.2909M9.05146 16.2909C9.05141 16.2909 9.05136 16.2908 9.05132 16.2908M9.05146 16.2909L9.05132 16.2908M9.05132 16.2908C7.56521 14.7539 7.6563 12.201 9.31347 10.7864L9.05132 16.2908Z"
                fill="#F5F5F5"
                stroke="#F5F5F5"
                strokeWidth={2}
              />
            </svg>
          </div>
          <div className="listing-card-text">{product.ProductName}</div>
          <div className="listing-card-price">
            Price - {product.Rate} INR {product.RentType}
          </div>
          <div className="listing-card-rating">Age - {product.AgeMonths} Months</div>
          <div className="red-dot" />
          <div className="yellow-dot" />
          <button className="listing-card-button" onClick={() => {
            navigate(`/authed/product/${product.id}`);
          }
          }>
            <div className="listing-card-button-text">Rent it</div>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.532073 12.8858L4.08213 16.3948L11.4863 9.07624V14.593H16.5073V0.605083H2.35452V5.56802H7.93547L0.532073 12.8858Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
