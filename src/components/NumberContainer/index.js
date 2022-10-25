import React from "react";
import classes from "./numberContainer.module.css";

const NumberContainer = () => {
    return (
        <>
            <div className={classes.numbers_container}>
                <div className={classes.number}>
                    <div className={classes.no}>$20M</div>
                    <p>Transactions</p>
                </div>
                <div className={classes.number}>
                    <div className={classes.no}>150+</div>
                    <p>User Review</p>
                </div>
                <div className={classes.number}>
                    <div className={classes.no}>3200+</div>
                    <p>Active User</p>
                </div>
            </div>
        </>)
}

export default NumberContainer;