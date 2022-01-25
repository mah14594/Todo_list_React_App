import React, { Fragment, useEffect } from "react";
import Form from "../Components/UI/Form";
import TodoTasks from "../Components/Tasks/TodoTasks";
import DoneTasks from "../Components/Tasks/DoneTasks";
import { SendTasks, FetchTasks } from "../Components/Store/index";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
let isInitial = true;

export default function Main() {
  const params = useParams();
  const ID = params.Id;
  const dispatch = useDispatch();
  const TodoTasksList = useSelector((state) => state.TasksReducer.TodoTasks);
  const DoneTasksList = useSelector((state) => state.TasksReducer.DoneTasks);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(SendTasks(TodoTasksList, "TodoTasks", ID));
    dispatch(SendTasks(DoneTasksList, "DoneTasks", ID));
  }, [TodoTasksList, DoneTasksList, dispatch, ID]);
  useEffect(() => {
    dispatch(FetchTasks(ID));
  }, [dispatch, ID]);

  return (
    <Fragment>
      <Form />
      <TodoTasks />
      <DoneTasks />
    </Fragment>
  );
}
