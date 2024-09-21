import Section3 from "../../components/Landing/Section3";
import Section2 from "../../components/Landing/Section2";
import Section5 from "../../components/Landing/Section5";
import "../../styles/Landing.css";
import Nav from "../../components/NavBar";
import Section1 from "../../components/Landing/Section1";

export default function Landing() {
  return (
    <>
      <Nav />

      <section>
        <Section1 />
      </section>
      <section></section>

      <section></section>
      <section><Section2/></section>


      <section
        style={{
          display: "flex",
          width: "100%",
          marginTop:"60px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <Section3 />
        </div>
      </section>
      <section><Section5/></section>
    </>
  );
}
