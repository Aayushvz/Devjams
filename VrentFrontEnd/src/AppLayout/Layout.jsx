import Nav from "../../components/NavBar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <header
        style={{
          width: "100%",
        }}
      >
        <Nav />
      </header>
      <main>{children}</main>
    </>
  );
}
