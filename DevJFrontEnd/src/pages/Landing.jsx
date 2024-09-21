import Section3 from "../../components/Landing/Section3";
import Section2 from "../../components/Landing/Section2";
import Section5 from "../../components/Landing/Section5";
import "../../styles/Landing.css";
import Nav from "../../components/NavBar";
import Section1 from "../../components/Landing/Section1";
import Section25 from "../../components/Landing/Section25";

export default function Landing() {
  return (
    <>
      <Nav />

      <section
        style={{
          height: "655px",
        }}
      >
        <Section1 />
      </section>

      <section>
        <Section2 />
      </section>

      <Section25 />

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          marginTop: "60px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Section3 />
      </section>
      <section>
        <Section5 />
      </section>
    </>
  );
}
