import React from "react";
import classes from "./Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

const Filter = (props: { setFilterInput: (arg0: string) => void }) => {
  function handleChange(event: { target: { value: string } }) {
    props.setFilterInput(event.target.value);
  }

  return (
    <div className={classes.filter_container}>
      <form>
        <FontAwesomeIcon icon={faSearchengin} />
        <input
          placeholder={"Hledat nazev"}
          className={classes.filter}
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Filter;
