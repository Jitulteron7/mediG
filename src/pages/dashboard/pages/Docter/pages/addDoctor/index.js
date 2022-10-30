import React from "react";
import Form from "./Form"
import classes from "./addDoctor.module.css";

const AddDoctor = () => {
  return (
    <div className={classes.container}>
      <h2>Patients </h2>
      <div className={classes.form}>
        <Form />
      </div>
    </div>
  );
};

export default AddDoctor;
