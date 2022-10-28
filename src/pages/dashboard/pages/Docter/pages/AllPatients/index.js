import React from "react";
import TableDiv from "../../../../../../components/Table";
import classes from "./all_patients.module.css";

const AllPatients = () => {
    return (
        <div className={classes.container}>
            <h2>Patients </h2>
            <TableDiv />
        </div>

    )
}

export default AllPatients;