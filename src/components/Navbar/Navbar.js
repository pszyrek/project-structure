import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" style={{ margin: "0 10px" }}>
        Home
      </Link>
      <Link to="/example-scss-view" style={{ margin: "0 10px" }}>
        Example with scss
      </Link>
      <Link to="/example-styled-view" style={{ margin: "0 10px" }}>
        Example with styled
      </Link>
    </div>
  );
};

export default Navbar;
