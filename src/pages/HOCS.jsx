import React, { useState, useRef } from "react";
import styles from "../styles/Hocs.module.scss";

function HOCS() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((e) => !e);
  };

  return (
    <>
      <div className={"container m-5"}>
        <h1>HOCS</h1>
        <div className={styles.main}>
          <h1>test</h1>
          <p>hello</p>
        </div>
        <button onClick={handleToggle}>open modal</button>
        {!open ? (
          <div className={styles.modal}>
            <h1>dialog</h1>
            <button onClick={handleToggle}>close modal</button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default HOCS;
