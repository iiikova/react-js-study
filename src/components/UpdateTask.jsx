import React from "react";
import { TextField, Button } from "@mui/material";

import UpdateIcon from "@mui/icons-material/Update";
import UpdateDisabledIcon from "@mui/icons-material/UpdateDisabled";

function UpdateTask({ updateTodo, changeTask, updateTask, cancelUpdateTask }) {
  return (
    <div className={"flex"}>
      <TextField
        id="filled-basic"
        label="change task..."
        variant="filled"
        className="w-full"
        value={updateTodo && updateTodo.title}
        onChange={(e) => changeTask(e)}
      />
      <Button onClick={updateTask} variant="contained" color="secondary">
        <UpdateIcon />
      </Button>
      <Button variant="outlined" color="error" onClick={cancelUpdateTask}>
        <UpdateDisabledIcon />
      </Button>
    </div>
  );
}

export default UpdateTask;
