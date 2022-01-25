import React from "react";
import classes from "./Icons.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function TrashIcon(props) {
  return (
    <FontAwesomeIcon
      className={classes.icons}
      icon={faTrash}
      onClick={props.onClick}
    />
  );
}
