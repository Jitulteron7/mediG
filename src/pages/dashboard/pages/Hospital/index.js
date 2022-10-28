import React from "react";
import { Route, Routes } from "react-router-dom";
import AllPatients from "../Docter/pages/AllPatients";
import PatientAnalytics from "../Docter/pages/PatientAnalytics";
import Meets from "../Docter/pages/Meets";
import Meet from "../Docter/pages/Meet";
import Schedular from "../Docter/pages/Schedular";

const Hospital = () => {
    return (<div>
        <Routes>
            <Route path="/" element={<AllPatients />} />
            <Route path="/:id" element={<PatientAnalytics />} />
            <Route path="/schedular/:id" element={<Schedular />} />
            <Route path="/meets" element={<Meets />} />
            <Route path="/meets/:id" element={<Meet/>} />
        </Routes>
    </div>)
}

export default Hospital;