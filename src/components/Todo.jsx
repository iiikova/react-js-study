import React from "react";

// icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// UI
import { Checkbox } from "@mui/material";

function Todo({ id, title, status, deleteTodo, checked, setUpdateTodo }) {
  return (
    <div
      key={id}
      className={`flex justify-between items-center  m-5  
      ${status ? "complete" : null}`}
    >
      <div className={`flex items-center `}>
        <Checkbox onClick={() => checked(id)} />
        <p>{title}</p>
      </div>
      <div className={"flex "}>
        <EditIcon
          title="edit"
          className="mr-5 cursor-pointer icon "
          onClick={() =>
            setUpdateTodo({
              id: id,
              title: title,
              status: status ? true : false,
            })
          }
        />
        <DeleteIcon
          title="delete"
          className=" cursor-pointer icon"
          onClick={() => deleteTodo(id)}
        />
      </div>
    </div>
  );
}

export default Todo;
