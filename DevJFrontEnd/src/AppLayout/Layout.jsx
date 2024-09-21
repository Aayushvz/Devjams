import Nav from "../../components/NavBar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <div>
        <Nav />
      </div>
      <main>{children}</main>
    </>
  );
}
