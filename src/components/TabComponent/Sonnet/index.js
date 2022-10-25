import React from "react";
import classes from "./sonnet.module.css";

const Sonnet = (props) => {
    const { heading, content, image } = props;
    return (<>
        <div className={classes.container}>
            <div className={classes.part1}>
                <h1>
                    {heading}
                </h1>
                <p>
                    {content}
                </p>
            </div>
            <div className={classes.part2}>
                <img src={image} />
            </div>
        </div>
    </>)
}

export default Sonnet;