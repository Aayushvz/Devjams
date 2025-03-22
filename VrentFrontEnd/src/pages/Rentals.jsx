import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import ListingCard from "../components/ListingCard";
import "../styles/Rentals.css";
import SearchBar from "../components/io/SearchBar";
import { useParams } from "react-router-dom";

export default function Rentals() {
  const [data, setData] = useState(null);
  const { search } = useParams();
  console.log(search);

  useEffect(() => {
    async function getData() {
      let { data: Listings, error } = await supabase
        .from("Listings")
        .select("*");
      if (error) console.log("Error fetching data:", error.message);
      setData(Listings);
      console.log(Listings);
    }
    getData();
  }, []);

  function searchProducts(products, keyword) {
    // Create a regex from the keyword, case-insensitive
    const regex = new RegExp(keyword, "i");

    // Filter through the array based on matching fields with the regex
    return products.filter(
      (product) =>
        regex.test(product.ProductName) ||
        regex.test(product.Description) ||
        regex.test(product.RentType)
    );
  }

  if (data && search) {
    const filteredData = searchProducts(data, search);
    return (
      <div className="ProdContainer">
        <div>
          <h1>Quick Rentals</h1>
          <SearchBar />
        </div>
        <div className="listing-grid">
          {filteredData.map((listing) => (
            <ListingCard key={listing.id} product={listing} />
          ))}
          {filteredData.length === 0 && <p className="nofind">No results found</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="ProdContainer">
      <div>
        <h1>Quick Rentals</h1>
        <SearchBar />
      </div>
      <div className="listing-grid">
        {data ? (
          data.map((listing) => (
            <ListingCard key={listing.id} product={listing} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
