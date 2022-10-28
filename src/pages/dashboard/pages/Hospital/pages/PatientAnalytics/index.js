import React from "react";
import TableDiv from "../../../../../../components/Table";
import classes from "./analytics.module.css";

const Analytics = () => {
    return (
        <div className={classes.container}>
            <h2>Patients Analysis</h2>
            <div className={classes.analytics}>
            <iframe  src={"https://datastudio.google.com/embed/reporting/8dc4ec31-1b51-49a3-b253-40d3c9749f9e/page/ebF5C"} frameborder={0} style={{border:0,width:"100%",height:"100%"}} allowfullscreen/>
            </div>
        </div>

    )
}

export default Analytics;