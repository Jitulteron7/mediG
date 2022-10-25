import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Analytics from "./pages/PatientAnalytics";

const Hospital = () => {
    return (

        <Routes>
            <Route exact path="" element={<Main />} />
            <Route path=":id" element={<Analytics/>} />
            <Route path="schedular/:id" element={<h2>create_docter</h2>} />
            <Route path="create_docter" element={<h2>create_docter</h2>} />
        </Routes>
    )
}

export default Hospital;