import React from "react";

import classes from "./Card.module.css";

const Card = (props: {
  className: string;
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
}) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
