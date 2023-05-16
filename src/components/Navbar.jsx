import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        gap: "1rem",
        paddingLeft: "0",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Singup</Link>
      </li>
      <li>
        <Link to="/problemset/all">Problems</Link>
      </li>
      <li style={{ marginLeft: "auto", color: "gray" }}>
        Made by{" "}
        <a href="https://twitter.com/emayush56" style={{ color: "gray" }}>
          Ayush
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
