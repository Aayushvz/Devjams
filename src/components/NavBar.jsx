import "../styles/NavBar.css";
import { useState, useEffect } from "react";

import supabase from "../utils/supabase";
import { useNavigate } from "react-router-dom";
import { setUser } from "./cart/cartslice";
import { useDispatch } from "react-redux";

export default function Nav() {
  const [session, setSession] = useState(null);
  const navi = useNavigate();
  const dispatch = useDispatch();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) console.log("Error logging out:", error.message);
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        dispatch(setUser(session.user.id));
      }
      async function getData() {
        let { data: User, error } = await supabase
          .from("User")
          .select("*")
          .eq("UUID", session.user.id);

        if (User.length == 0) {
          console.log(User);
          navi("/kyc");
        }
        if (error) console.log("Error logging out:", error.message);
      }
      if (session) {
        getData();
      }
    });
  }, [dispatch, navi]);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.5fr 1fr 0.5fr 1fr",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          marginBottom: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            fontSize: 64.99,
            fontFamily: "Trap",
            fontWeight: "800",
            wordWrap: "break-word",
          }}
        >
          <img
            src="/Vrent/vrent logo.png"
            width={150}
            height={50}
            className="inv"
            onClick={() => navi("/")}
            alt="Vrent Logo"
          />
        </div>
        <div></div>
        <div>
          <div
            style={{
              width: "1120px",
              height: "65px",
              position: "relative",
              background: "rgba(0, 0, 0, 0.85)",
              boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.75)",
              borderRadius: 17,
              border: "1px white solid",
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{ color: "white", textAlign: "center", width: "100%" }}
              onClick={() => {
                navi("/");
              }}
            >
              HOME
            </button>
            <button
              style={{ color: "white", textAlign: "center", width: "100%" }}
              onClick={() => {
                navi("/authed/rentals");
              }}
            >
              QUICK RENTALS
            </button>
            <button
              style={{ color: "white", textAlign: "center", width: "100%" }}
              onClick={() => {
                navi("/authed/listing/createListing");
              }}
            >
              LIST RENTAL
            </button>
            <button
              style={{ color: "white", textAlign: "center", width: "100%" }}
              onClick={() => {
                navi("/authed/listing/createListing");
              }}
            >
              LIST SERVICES
            </button>
            <button
              style={{ color: "white", textAlign: "center", width: "100%" }}
            >
              SELL PRODUCTS
            </button>
          </div>
        </div>
        <div></div>
        {!session ? (
          <button
            style={{ color: "white", textAlign: "center", width: "100%" }}
            onClick={() => {
              if (session) {
                signOut();
                setSession(null);
              } else {
                window.location.href = "/login";
              }
            }}
          >
            Login
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => {
                navi("/authed/cart");
              }}
            >
              <img src="/Vrent/Acounts.png" width={30} height={30} alt="Account" />
            </button>

            <button
              onClick={() => {
                navi("/authed/Dashboard");
              }}
            >
              <img src="/Vrent/Cart.png" width={30} height={30} alt="Cart" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
