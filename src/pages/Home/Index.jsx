import React from "react";
import style from "./style.module.scss";
import { useReducer } from "react";
import { reducer } from "../../reducer";

function  Index({ init }) {
  const [state, dispatch] = useReducer(reducer, init);

  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }
  function reset() {
    dispatch({ type: "reset" });
  }

  return (
    <div className="container mx-5">
      Home
      <div>
        <h1>{state.count}</h1>
        <button className="btn btn-primary " onClick={increment}>
          +
        </button>
        <button className="btn btn-primary ml-5" onClick={decrement}>
          -
        </button>
        <button className="btn btn-primary ml-5" onClick={reset}>
          reset
        </button>
      </div>
      <form className={style.form}>
        <div className={style.form_group}>
          <label>Name: </label>
          <input type="text" />
        </div>
        <div className={style.form_group}>
          <label>Name: </label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default Index;
