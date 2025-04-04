import "../../styles/Section15.css";
import { useNavigate } from "react-router-dom";

export default function Section15() {
  const navigate = useNavigate();

  return (
    <div className="container15">
      <div className="box15">
        <div className="left15">
          <p className="p11">WANT TO LIST AN ITEM FOR RENT</p>
          <button
            className="button15"
            onClick={() => {
              navigate("/authed/listing/createListing");
            }}
          >
            List now for free
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <text x="0" y="12" fontFamily="Arial" fontSize="16">
                →
              </text>
            </svg>
          </button>
        </div>
        <div className="right15">
          <p className="p11">WANT TO LIST AN ITEM FOR SELL</p>
          <button
            className="button15"
            onClick={() => {
              navigate("/authed/listing/createListing");
            }}
          >
            Sell now for free
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <text x="0" y="12" fontFamily="Arial" fontSize="16">
                →
              </text>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
