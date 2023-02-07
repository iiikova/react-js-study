import React, { useState, useContext } from "react";
import styles from "../styles/News.module.scss";

// CONTEXT
import { NameContext } from "../Context";

// ZUSTAND
import { useName } from "../Store";

const News = () => {
  // const { name } = useContext(NameContext);

  const { name, age, count, inc, dec } = useName();

  return (
    <div className="container mx-5">
      <h1>News</h1>
      <p>my name is: {name}</p>
      <p>age: {age}</p>
      <p>count: {count}</p>
      <button className="btn btn-primary" onClick={dec}>
        -
      </button>
      <button className="btn btn-secondary" onClick={inc}>
        +
      </button>
    </div>
  );
};

export default News;
