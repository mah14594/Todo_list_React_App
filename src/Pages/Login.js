import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useInput from "../Components/Hooks/use-input";
import { useDispatch } from "react-redux";
import { IDActions } from "../Components/Store";
import classes from "../Components/UI/Form.module.css";
export default function Login() {
  const dispatch = useDispatch();
  const { value, valueisvalid, istouched, changeinput, blurhandler } = useInput(
    (value) => value.includes("@")
  );
  const loginhandler = () => {
    dispatch(IDActions.setID(value));
  };
  const Idvalue = value.replaceAll(".", "");
  return (
    <Fragment>
      <div className="input-group  mt-2 p-3 p-md-5">
        <h4 className="text-center col-12 mt-3 mx-auto">
          Enter your email address to use the App
        </h4>

        <input
          type="search"
          className=" form-control shadow-none"
          placeholder="Add a Task"
          onChange={changeinput}
          value={value}
          onBlur={blurhandler}
        />
        <Link
          to={valueisvalid ? `/Main/${Idvalue}` : "/login"}
          className={`btn px-md-5 ${classes.userbutton}`}
          type="Button"
          onClick={loginhandler}
        >
          Go To App
        </Link>
      </div>
      {!valueisvalid && istouched && (
        <div className="text-center col-12 mx-auto text-danger">
          Please enter a valid Email Address!
        </div>
      )}
    </Fragment>
  );
}
