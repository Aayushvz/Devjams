import "../../styles/Section15.css";

export default function Section15() {
  return (
    <div className="container15">
      <div className="box15">
        <div className="left15">
          <p className="p11">WANT TO LIST AN ITEM FOR RENT</p>
          <button className="button15">
            List now for free
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <text x="0" y="12" fontFamily="Arial" fontSize="16">
                →
              </text>
            </svg>
          </button>
        </div>
        <div className="right15">
          <p className="p12">WANT TO LIST AN ITEM FOR SELL</p>
          <button className="button15">
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