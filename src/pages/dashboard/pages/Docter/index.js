import React from "react";
import { Route, Routes } from "react-router-dom";
import AllPatients from "./pages/AllPatients";
import PatientAnalytics from "./pages/PatientAnalytics";
import Meets from "./pages/Meets";
import Meet from "./pages/Meet";
import Schedular from "./pages/Schedular";

const Docter = () => {
    return (<div>
        <Routes>
            <Route path="/" element={<AllPatients />} />
            <Route path="/:id" element={<PatientAnalytics />} />
            <Route path="/schedular/:id" element={<Schedular />} />
            <Route path="/meets" element={<Schedular />} />
            <Route path="/meets/:id" element={<Meet/>} />
        </Routes>
    </div>)
}

export default Docter;