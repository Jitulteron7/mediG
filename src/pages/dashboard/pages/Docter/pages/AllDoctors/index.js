import React from "react";
import TableDiv from "../../../../../../components/Tables/TableDoctor";
import classes from "./all_doctors.module.css";

const AllDoctor = () => {
    return (
        <div className={classes.container}>
            <h2>Doctor </h2>
            <TableDiv />
        </div>

    )
}

export default AllDoctor;