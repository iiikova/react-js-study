import React, { useState, useMemo } from "react";
function Home() {
  const list = [2, 4, 1, 5, 3];

  const sortList = () =>
    list.sort((a, b) => {
      console.log("sort");
      return a - b;
    });

  const sortedList = useMemo(sortList, []);
  // const sortedList = sortList();

  const [update, setUpdate] = useState(false);

  console.log("render");

  return (
    <div className="px-5 ">
      <h1>Home</h1>
      <button className="btn">getData</button>
      <hr />
      <h1>useMemo</h1>
      <div>
        {sortedList.map((a) => (
          <p>{a}</p>
        ))}
      </div>
      <button className="btn" onClick={() => setUpdate(!update)}>
        update
      </button>
    </div>
  );
}

export default Home;
