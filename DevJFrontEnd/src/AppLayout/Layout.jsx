import Nav from "../../components/NavBar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <header
        style={{
          position: "fixed",
          width: "100%",
          top: 0,
        }}
      >
        <Nav />
      </header>
      <main>{children}</main>
    </>
  );
}
