import React from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import { MdAdd } from "react-icons/md";

function InputForm({ addTask, newTask, setNewTask }) {
  return (
    <div className="flex justify-between ">
      <TextField
        id="filled-basic"
        label="add task..."
        variant="filled"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="w-full "
      />
      <Button variant="contained" onClick={addTask}>
        <MdAdd />
      </Button>
    </div>
  );
}

export default InputForm;
