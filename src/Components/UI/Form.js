import React from "react";
import classes from "./Form.module.css";
import { useDispatch } from "react-redux";
import { TasksActions } from "../Store";
import useInput from "../Hooks/use-input";
export default function Form() {
  const { value, valueisvalid, reset, changeinput, blurhandler } = useInput(
    (value) => value.trim().length > 0
  );

  const Dispatch = useDispatch();
  const AddnewTaskHandler = () => {
    Dispatch(
      TasksActions.AddnewTask({
        title: value,
        id: Math.random(),
      })
    );
    reset();
  };
  return (
    <div className="input-group mb-3 mt-2 p-3 p-md-5">
      <input
        type="search"
        className=" form-control shadow-none"
        placeholder="Add a Task"
        onChange={changeinput}
        value={value}
        onBlur={blurhandler}
      />
      <button
        className={`btn px-md-5 ${classes.userbutton}`}
        type="Button"
        disabled={!valueisvalid}
        onClick={AddnewTaskHandler}
      >
        Add New Task
      </button>
    </div>
  );
}
