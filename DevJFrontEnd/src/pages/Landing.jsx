import Section3 from "../../components/Landing/Section3";
import Section2 from "../../components/Landing/Section2";
import Section5 from "../../components/Landing/Section5";
import MainFooter from "../../components/Landing/MainFooter";
import Section15 from "../../components/Landing/Section15";
import "../../styles/Landing.css";
import Nav from "../../components/NavBar";
import Section1 from "../../components/Landing/Section1";
import Section25 from "../../components/Landing/Section25";

import "../../styles/special.css";

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
        <Section15/>
      <section>
        <Section2 />
      </section>

      <Section25 />

      <section className="specialSect">
        <Section3 />
      </section>
      <section className="specialSect">
        <Section5 />
      </section>
      <MainFooter/>
    </>
  );
}
