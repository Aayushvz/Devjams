import { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../components/cart/cartslice";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.cart.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(cart);
  useEffect(() => {
    async function getData() {
      let { data: Listings, error } = await supabase
        .from("Listings")
        .select("*")
        .eq("id", id);
      setData(Listings);
      if (error) console.log("Error fetching data:", error.message);
    }
    getData();
  }, [id]);

  return (
    <>
      {!user && navigate("/login")}
      {data ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={data[0].imgurl}
              alt={data[0].ProductName}
              width={500}
              height={500}
            />
            <button
              onClick={() => {
                dispatch(addItem(data[0]));
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            style={{
              display: "flex",
              width: "50%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <h1
              style={{
                color: "#131212",
                fontSize: 68,
                fontFamily: "Unica One",
                fontWeight: "400",
                textTransform: "uppercase",
                wordWrap: "break-word",
              }}
            >
              {data[0].ProductName}
            </h1>
            <div
              style={{
                display: "flex",
                width: "35%",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "black",
                  color: "white",
                  fontSize: 24,
                  fontWeight: "700",
                }}
              >
                <p>{data[0].Description}</p>
                <p>Quantity: {data[0].Quantity}</p>
                <p>
                  Rate: {data[0].Rate} {data[0].RentType}
                </p>
              </div>
            </div>
            <div
              style={{
                width: "50%",
              }}
            >
              <h2>Description</h2>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex eaK commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
