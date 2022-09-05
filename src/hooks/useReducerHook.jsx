import React, { useReducer } from "react";

import { usersReducer, INITIAL_STATE } from "../components/usersReducer";

import { ACTION_TYPES } from "../components/actionTypes";

function useReducerHook() {
  const [state, dispatch] = useReducer(usersReducer, INITIAL_STATE);

  const fetchUsers = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch(state.url)
      .then((response) => response.json())
      .then((json) => dispatch({ type: ACTION_TYPES.FETCH_URL, payload: json }))
      .catch((e) => {
        console.log(e);
        dispatch({ type: ACTION_TYPES.FETCH_ERROR, payload: e });
      });
  };

  const setTextInput = (e) => {
    console.log(e.target.value);
    dispatch({ type: ACTION_TYPES.SET_TEXT, payload: e.target.value });
  };

  const increment = () => {
    dispatch({ type: ACTION_TYPES.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: ACTION_TYPES.DECREMENT });
  };
  return (
    <div className="mx-5">
      <div>
        <form action="https://formsubmit.co/ikova.ua@gmail.com" method="POST">
          <input className="input" type="text" name="name" required />
          <input className="input" type="email" name="email" required />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>

      <div>
        <p>Count: {state.count}</p>
        <button className="btn btn-primary" onClick={increment}>
          +
        </button>
        <button className="btn btn-primary" onClick={decrement}>
          -
        </button>
      </div>

      <button className="btn btn-primary" onClick={fetchUsers}>
        {state.loading ? "wait..." : "fetch users"}
      </button>

      <div>
        {state.users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
      <h2>{state.error && "something error"}</h2>

      <div>
        <input
          className={"my-2 input"}
          type="text"
          placeholder="type something..."
          onChange={setTextInput}
        />
        <p>{state.text}</p>
      </div>
    </div>
  );
}

export default useReducerHook;
