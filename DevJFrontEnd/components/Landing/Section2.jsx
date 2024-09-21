import HeroCard from "../HeroCard";
import "../../styles/HeroCard.css";

export default function Section2() {
  const products = [
    {
      id: 1,
      imageSrc: "/cycle.png",
      title: "Bicycle",
      price: 300,
    },
    {
      id: 2,
      imageSrc: "/drive.png",
      title: "Hard Drive",
      price: 500,
    },
    {
      id: 3,
      imageSrc: "/jwell.png",
      title: "Jewellery",
      price: 700,
    },
    {
      id: 4,
      imageSrc: "/laptop.png",
      title: "Laptop",
      price: 1000,
    },
  ];

  return (
    <div className="app">
      <div className="page2">
        <div className="header1">
          <div className="top-rentals">Top Rentals</div>
          <div className="trending">Trending</div>
        </div>
        <div className="product-cards-container">
          {products.map((product) => (
            <HeroCard key={product.id} product={product} />
          ))}
        </div>
        <div className="Quote">
          <div>You can Save Money in Two Ways</div>
          <div>MAKE MORE or SPEND LESS</div>
        </div>
      </div>
    </div>
  );
}
