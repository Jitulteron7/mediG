import React from "react";
import classes from "./meet.module.css";
import TableDiv from "../../../../../../components/Tables/TableSchedules";
import FormSchedule from "./Form";
import { useLocation } from "react-router-dom";


const Schedular = () => {
    const state = useLocation()


    return (
        <div className={classes.container}>
            <h2>{state.pathname.split("/")[2] === "docter"?"Schedule":"Schedular"} </h2>
            <div className={classes.Schedular}>                
                {state.pathname.split("/")[2] === "docter" ?
                    <div className={classes.container}>
                        <div className={classes.table}>
                            <TableDiv />
                        </div>
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