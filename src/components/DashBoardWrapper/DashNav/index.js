import React from "react";
import classes from "./dashnav.module.css";
import MyButtom from "../../MyButton";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

const DashNav = () => {
    const state = useLocation()
    return (
        <div className={classes.container}>
            {/* <div className={classes.topbar}>
                <div className={classes.logo}>
                    <h2>logo</h2>
                </div>
                <div className={classes.btn}>
                    <button>Logout</button>
                </div>
            </div> */}
            <div className={classes.sidebar}>
                <Link to="/">
                    <div className={classes.logo}>
                        <h1>MEDIG</h1>
                    </div>
                </Link>
                <div className={classes.ul_container}>
                    <Link to={`/dash/${state.pathname.split("/")[2]}`}>All Patients</Link>
                    {
                        state.pathname.split("/")[2] === "hospital" ?
                            <Link to={`/dash/hospital/doctors`}>All Doctors</Link> :

                            state.pathname.split("/")[2] === "patients" ?
                                <Link>My Docter</Link> :
                                <></>

                    }
                    {state.pathname.split("/")[2] === "hospital" ?
                        <Link to={`/dash/hospital/addDoctor`}>Add Doctors</Link> :
                        <></>}
                    <Button>Logout</Button>
                </div>
            </div>
        </div>)
}

export default DashNav;