import * as React from "react";

import classes from "./Button.module.css";

const Button = (props: {
  class?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined
    | string;
}) => {
  return (
    <button
      className={props.class || classes.button}
      type={"button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
