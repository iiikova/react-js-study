import React, { useState, useContext, useEffect } from "react";

const useToggle = (initState = false) => {
  const [state, setState] = useState(initState);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];
};

export default useToggle;
