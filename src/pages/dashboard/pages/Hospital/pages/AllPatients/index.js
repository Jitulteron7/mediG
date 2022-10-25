import React from "react";
import TableDiv from "../../../../../../components/Table";
import classes from "./main.module.css";
const Main = () => {
    return (
        <div className={classes.container}>
            <h2>Patients records</h2>
            <TableDiv />
        </div>

    )
}

export default Main;