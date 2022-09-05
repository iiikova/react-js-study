import React, { useState, useRef } from "react";
import Button from "../components/Button";

function HOCS() {
  const [userName, setUserName] = useState("Ihor");
  const [newUserName, setNewUserName] = useState("");

  function changeUserName() {
    setUserName(newUserName);
  }

  return (
    <>
      <div className={"m-5"}>
        <h1>Hello: {userName}</h1>

        <input
          type="text"
          className="input w-4"
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button onClick={changeUserName} className="btn shadow-lg m-5">
          change name
        </button>
        <Button />
      </div>
    </>
  );
}

export default HOCS;
