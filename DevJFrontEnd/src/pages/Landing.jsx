import Section3 from "../../components/Landing/Section3";

export default function Landing() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/5866/7fe9/ef94c6f866c9b6bfd1ffc342986633b6?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XDji2JWon4TKuvBlQkJOAb3tmaIBVdyjDVVpAC8S2qMrrOqZOwAtUKH-TyL922xrPR-ziQqE686VA-1z2XXFqwwuTIa6iYEFeV2gPDix1RdNkJjw0qly5~b~vVHoYcDQbl0w9IuUi-smqNIb04Mt5P8pF2aQY~y5LlQcOG6zpDr8xg3XeRnlDDLZOPtOfULWoif4JH-9lQq4i6pv60UCsaBFcFLFBB-f35xRU39PsgCMy5CjRZemNcmSFDc~aux7Pj16jxvuj7LBfl-q1A5aGiLkdieMV5Kf0YGdvebntD3B9wxg1UWer1t1YFY~W4CkbZth1HVok8e1YHRb4EQndg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          mixBlendMode: "difference",
          opacity: 0.1,
        }}
      ></div>
      <section></section>
      <section></section>
      <section style={{ position: "relative", width: "100%", height: "100vh" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Section3 />
        </div>
      </section>
    </>
  );
}
