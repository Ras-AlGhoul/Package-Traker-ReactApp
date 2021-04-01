import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="main-menu">
      <Link to="/home">
        <a href="">Home</a>
      </Link>
      <Link to="/packages">
        <a href="">Packages</a>
      </Link>
    </nav>
  );
}
