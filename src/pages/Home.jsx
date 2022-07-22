import React from "react";

function Home({ data, error }) {
  return (
    <div>
      <h1>Home</h1>
      <div>
        {data.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
