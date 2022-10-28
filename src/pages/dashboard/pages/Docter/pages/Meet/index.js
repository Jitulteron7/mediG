import React from "react";
import classes from "./meet.module.css";

const Meet = () => {
    return (
        <div className={classes.container}>
            <h2>MEETS </h2>
            <div className={classes.videoCam}>
                <div className={classes.videoStream}>
                </div>
            </div>
        </div>

    )
}

export default Meet;