import React from "react";
import TrashIcon from "../UI/TrashIcon";
import CheckIcon from "../UI/CheckIcon";
import classes from "./Task.module.css";
import { useSelector, useDispatch } from "react-redux";
import { TasksActions } from "../Store";
export default function Task(props) {
  const TodoTasks = useSelector((state) => state.TasksReducer.TodoTasks);
  const Dispatch = useDispatch();

  const task = TodoTasks.find((item) => {
    return item.id === props.id;
  });

  const AddtoCompleteHandler = () => {
    Dispatch(TasksActions.AddDoneTask(task));
    console.log(task);
  };
  let checkicon = <CheckIcon onClick={AddtoCompleteHandler}></CheckIcon>;
  let style = classes["not-completed-task"];
  if (props.iscompleted === "true") {
    checkicon = "";
    style = classes["completed-task"];
  }
  const RemoveTaskHandler = () => {
    Dispatch(TasksActions.RemoveTask(props.id));
  };
  return (
    <ol className={`col-12 col-md-8 ${style}`}>
      <span className={classes.counter}>{props.counter}</span>
      <li>{props.title}</li>
      <div>
        {checkicon}
        <TrashIcon onClick={RemoveTaskHandler}></TrashIcon>
      </div>
    </ol>
  );
}
