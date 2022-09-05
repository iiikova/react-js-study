import React from "react";
import useToggle from "./useToggle/useToggle";

function CustomHooks() {
  const [show, toggle] = useToggle();
  const [show2, toggle2] = useToggle();

  return (
    <div className={"m-5 "}>
      <h1>{show ? "Show" : "Hide"}</h1>
      <button onClick={toggle} className="btn">
        {show ? "Show" : "Hide"}
      </button>

      <h1>{show2 ? "Show2" : "Hide2"}</h1>
      <button onClick={toggle2} className="btn">
        {show2 ? "Show2" : "Hide2"}
      </button>
    </div>
  );
}

export default CustomHooks;
