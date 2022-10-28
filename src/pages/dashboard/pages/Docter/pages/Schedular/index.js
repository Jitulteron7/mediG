import React from "react";
import classes from "./meet.module.css";
import TableDiv from "../../../../../../components/Tables/Table";
import FormSchedule from "./Form";


const Schedular = () => {

    return (
        <div className={classes.container}>
            <h2>Schedular </h2>
            <div className={classes.Schedular}>
                {false ? <div>
                    table
                </div> :
                    <div className={classes.container}>
                        <div className={classes.table}>
                            <TableDiv />
                        </div>
                        <div className={classes.form}>
                            <FormSchedule />
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}

export default Schedular;