import "../styles/NavBar.css";
import { useState, useEffect } from "react";

import supabase from "../utils/supabase";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [session, setSession] = useState(null);
  const navi = useNavigate();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      async function getData() {
        let { data: User, error } = await supabase
          .from("User")
          .select("*")
          .eq("UUID", session.user.id);

        if (User.length == 0) {
          console.log(User);
          // window.location.href("/kyc");
          navi("/kyc");
        }
      }
      if (session) {
        getData();
      }
      console.log(session.user.id);
    });
  }, []);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.5fr 1fr 0.5fr 1fr",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div
          style={{
            color: "black",
            fontSize: 64.99,
            fontFamily: "Trap",
            fontWeight: "800",
            lineHeight: 3.84,
            wordWrap: "break-word",
          }}
        >
          Vrent
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
            >
              HOME
            </button>
            <button
              style={{ color: "white", textAlign: "center", width: "100%" }}
            >
              QUICK RENTALS
            </button>
            <button
              style={{ color: "white", textAlign: "center", width: "100%" }}
            >
              LIST RENTAL
            </button>
            <button
              style={{ color: "white", textAlign: "center", width: "100%" }}
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
        <button
          style={{ color: "white", textAlign: "center", width: "100%" }}
          onClick={() => {
            if (session) {
              signOut();
              // setSession(null);
            } else {
              window.location.href = "/login";
            }
          }}
        >
          {session ? "LOGOUT" : "LOGIN"}
        </button>
      </div>
    </>
  );
}
