import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./dash.wrapper.module.css";
import DashNav from "./DashNav";

const DashboardWrapper = () => {
    return (
        <div className={classes.container}>
            <DashNav />
            <div className={classes.outlet_container}>
                <Outlet />
            </div>
        </div>)
}

export default DashboardWrapper;