import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Hooks() {
  const isActive = ({ isActive }) => (isActive ? "navlink mr-5" : "mr-5");

  return (
    <div className=" text-spacing">
      <div className="mb-2 p-5 bg-amber-200">
        <NavLink className={isActive} to={"usereducer"} end>
          useReduser
        </NavLink>
        <NavLink className={isActive} to={"usememo"}>
          useMemo
        </NavLink>
        <NavLink className={isActive} to={"customHooks"}>
          customHooks
        </NavLink>
        <NavLink className={isActive} to={"useContext"}>
          useContext
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default Hooks;
