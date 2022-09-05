import React, { useState } from "react";

function News() {
  const planet = [
    { name: "mars", gasPlanet: true },
    { name: "earth", gasPlanet: true },
    { name: "mercury", gasPlanet: false },
    { name: "moon", gasPlanet: true },
    { name: "saturn", gasPlanet: false },
  ];

  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [textColor, setTextColor] = useState("black");

  const showHide = () => {
    setShow((show) => !show);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="px-5">
      <h1
        className="text-lg font-bold"
        style={{ color: textColor, cursor: "pointer" }}
        onClick={() => setTextColor(textColor === "black" ? "red" : "black")}
      >
        News
      </h1>
      <div>
        {planet.map((planet) => {
          return (
            <div>
              <p>{planet.gasPlanet ? planet.name : null}</p>
            </div>
          );
        })}
      </div>
      <hr className={"my-5"} />
      <h2>{!show ? "Show" : "hide"} </h2>
      <button
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700  outline-none"
        onClick={showHide}
      >
        toggle
      </button>
      <hr className={"my-5"} />
      <input type="text" onChange={handleInput} />
      <h2>Input: {input}</h2>
    </div>
  );
}

export default News;
