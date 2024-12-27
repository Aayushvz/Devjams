import { useState, useEffect } from "react";
import supabase from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

export default function Kyc() {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      // console.log(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  async function HandleSubmit() {
    const { data, error } = await supabase
      .from("User")
      .insert([
        {
          Phone: phno,
          HB: Hblock,
          Rno: room,
          RegNo: Regno,
          UUID: session.user.id,
        },
      ])
      .select();

    if (error) {
      console.log(error);
    } else {
      navigate("/");
    }
  }

  const [Hblock, setHblock] = useState("X");
  const [Regno, setRegno] = useState("");
  const [room, setRoom] = useState("X");
  const [phno, setPhNO] = useState("0000000000");

  return (
    <form style={styles.form} onSubmit={HandleSubmit}>
      <h2>Your information</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>H-Block:</label>
        <input
          style={styles.input}
          value={Hblock}
          onChange={(e) => setHblock(e.target.value)}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Registration Number:</label>
        <input
          style={styles.input}
          value={Regno}
          onChange={(e) => setRegno(e.target.value)}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Room:</label>
        <input
          style={styles.input}
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Phone Number:</label>
        <input
          style={styles.input}
          value={phno}
          onChange={(e) => setPhNO(e.target.value)}
        />
      </div>

      <button style={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}

const styles = {
  form: {
    backgroundColor: "#f9f9f9", // Light background
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "16px",
    color: "#333",
  },
  input: {
    width: "80%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#333",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
