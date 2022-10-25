import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardWrapper from "../../components/DashBoardWrapper";
import Docter from "./pages/Docter";
import Hospital from "./pages/Hospital";
import Patients from "./pages/Patients";


const Dashboard = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardWrapper />}>
                <Route path="docter/*" element={<Docter />} />
                <Route path="hospital/*" element={<Hospital />} />
                <Route path="patients/*" element={<Patients />} />
            </Route>
        </Routes>
    )
}


export default Dashboard;