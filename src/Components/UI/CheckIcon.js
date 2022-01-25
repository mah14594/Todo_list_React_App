import React from "react";
import classes from "./Icons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function CheckIcon(props) {
  return (
    <FontAwesomeIcon
      className={classes.icons}
      icon={faCheck}
      onClick={props.onClick}
    />
  );
}
