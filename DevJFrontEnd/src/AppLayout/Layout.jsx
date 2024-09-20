// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Header</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
