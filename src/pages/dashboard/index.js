import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardWrapper from "../../components/DashBoardWrapper";
import classes from "./dashboard.module.css";
import Docter from "./pages/Docter";
import Hospital from "./pages/Hospital";
import Patients from "./pages/Patients";


const Dashboard = () => {
    return (
        <div className={classes.container}>
            <Routes>
                <Route path="/" element={<DashboardWrapper />}>
                    <Route path="docter/*" element={<Docter />} />
                    <Route path="hospital/*" element={<Hospital />} />
                    <Route path="patients/*" element={<Patients />} />
                </Route>
            </Routes>
        </div>
    )
}


export default Dashboard;