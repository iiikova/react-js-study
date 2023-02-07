import React from "react";
import { NavLink } from "react-router-dom";

function Navigator() {
  return (
    <div className="container   bg-cyan-500">
      <div className="d-flex justify-center align-center">
        <NavLink className="mr-5 uppercase hover:bg-cyan-600 px-5" to={"news"}>
          News
        </NavLink>
        <NavLink className="mr-5 uppercase hover:bg-cyan-600 px-5" to={"home"}>
          home
        </NavLink>
        <NavLink className="mr-5 uppercase hover:bg-cyan-600 px-5" to={"hocs"}>
          hocs
        </NavLink>
        <NavLink className="mr-5 uppercase hover:bg-cyan-600 px-5" to={"ts"}>
          TS
        </NavLink>
      </div>
    </div>
  );
}

export default Navigator;
