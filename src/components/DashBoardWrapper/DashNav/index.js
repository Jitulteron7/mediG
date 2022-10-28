import React from "react";
import classes from "./dashnav.module.css";
import MyButtom from "../../MyButton";
import { Link } from "react-router-dom";

const DashNav = () => {
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
                    <Link>Main</Link>
                    <Link>Anylasis</Link>
                    <Link>Join </Link>
                    <Link>Create Meet</Link>
                    <Link>Create Schedule</Link>
                </div>
            </div>
        </div>)
}

export default DashNav;