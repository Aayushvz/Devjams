import HeroCard from "../HeroCard";
import "../../styles/HeroCard.css";

export default function Section2() {
  const products = [
    {
      id: 1,
      imageSrc: "/Vrent/cycle.png",
      title: "Bicycle",
      price: 300,
    },
    {
      id: 2,
      imageSrc: "/Vrent/drive.png",
      title: "Hard Drive",
      price: 500,
    },
    {
      id: 3,
      imageSrc: "/Vrent/jwell.png",
      title: "Jewellery",
      price: 700,
    },
    {
      id: 4,
      imageSrc: "/Vrent/laptop.png",
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
      </div>
    </div>
  );
}
