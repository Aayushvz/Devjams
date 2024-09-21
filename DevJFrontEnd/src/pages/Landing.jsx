import Section3 from "../../components/Landing/Section3";
import "../../styles/Landing.css";
import Nav from "../../components/NavBar";

export default function Landing() {
  return (
    <>
      <Nav />
      <section></section>
      <section></section>

      <section
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <Section3 />
        </div>
      </section>
    </>
  );
}
