import { NavLink } from "react-router-dom";

function Navigator() {
  const isActive = ({ isActive }) =>
    isActive ? "nav-link uppercase m-5" : "m-5 uppercase";

  return (
    <nav className=" flex items-center bg-gray-500 h-20 text-white">
      <NavLink to="/home" className={isActive} end={true}>
        HOME
      </NavLink>
      <NavLink to="/news" className={isActive}>
        NEWS
      </NavLink>
      <NavLink to="/hocs" className={isActive}>
        HOCS
      </NavLink>
      <NavLink to="/hooks/" className={isActive}>
        HOOKS
      </NavLink>
    </nav>
  );
}

export default Navigator;
