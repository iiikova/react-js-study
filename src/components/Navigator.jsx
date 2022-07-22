import React from "react";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <nav className="px-5 flex items-center bg-gray-500 h-20 text-white">
      <Link to="/home" className="mr-2">
        Home
      </Link>
      <Link to="/news">News</Link>
    </nav>
  );
}

export default Navigator;
