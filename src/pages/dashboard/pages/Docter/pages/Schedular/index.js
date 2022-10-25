import React from "react";
import classes from "./meet.module.css";

const Schedular = () => {

    return (
        <div className={classes.container}>
            <h2>Schedular </h2>
            <div className={classes.Schedular}>
                {false ? <div>
                    table
                </div> :
                    <div className={classes.upload}>
                        <input type="file" />
                    </div>
                }
            </div>
        </div>

    )
}

export default Schedular;