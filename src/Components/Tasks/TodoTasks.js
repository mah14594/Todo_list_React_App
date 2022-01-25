import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

export default function TodoTasks() {
  const TodoTasksList = useSelector((state) => state.TasksReducer.TodoTasks);
  let content = (
    <h5 className="col-12 text-center text-danger">No Tasks Yet!</h5>
  );
  if (TodoTasksList.length > 0) {
    content = TodoTasksList.map((task, index) => (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        iscompleted="false"
        counter={index + 1}
      />
    ));
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-3"> To Do Tasks </h1>
      <div>{content}</div>
    </div>
  );
}
