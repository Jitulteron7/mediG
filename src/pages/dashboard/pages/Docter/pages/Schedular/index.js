import React from "react";
import classes from "./meet.module.css";
import TableDiv from "../../../../../../components/Tables/TableSchedules";
import FormSchedule from "./Form";
import { useLocation } from "react-router-dom";
import {useSelector} from "react-redux"

const Schedular = () => {
    const state = useLocation()
    const {schedules} = useSelector((state) => state.auth);

    return (
        <div className={classes.container}>
            <h2>{state.pathname.split("/")[2] === "docter"?"Schedule":"Schedular"} </h2>
            <div className={classes.Schedular}>                
                {state.pathname.split("/")[2] === "docter" ?
                    <div className={classes.container}>
                        <div className={classes.table}>
                            <TableDiv schedules={schedules}/>
                        </div>
                    </div> :
                    <div className={classes.container}>
                        <div className={classes.table}>
                            <TableDiv schedules={schedules}/>
                        </div>
                        <div className={classes.form}>
                            <FormSchedule schedules={schedules}/>
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}

export default Schedular;