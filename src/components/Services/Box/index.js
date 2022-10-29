import React from "react";
import classes from "./box.module.css";

const Box = (props) => {
  const { img, text, header } = props;

  return (
    <>
      <div className={classes.box_container}>
        <div className={classes.img_container}>
          <img src={img} width="100" />
        </div>
        <div className={classes.content}>
          <h2>{header}</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Box;
