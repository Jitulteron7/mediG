import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientAnalytics from "../Docter/pages/PatientAnalytics";
import Meets from "../Docter/pages/Meets";
import Schedular from "../Docter/pages/Schedular";

const Patient = () => {
    return (<div>
        <Routes>            
            <Route path="/" element={<PatientAnalytics />} />
            <Route path="/schedular/:id" element={<Schedular />} />
            <Route path="/meets" element={<Meets />} />
            {/* <Route path="/meets/:id" element={<Meet/>} /> */}
        </Routes>
    </div>
    )
}

export default Patient;