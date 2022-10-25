import React from "react";
import { Route, Routes } from "react-router-dom";

const Docter = () => {
    return (<div>
        <Routes>
            <Route path="/" element={<h2>Main</h2>} />
            <Route path="/:id" element={<h2>Main</h2>} />
            <Route path="/schedular/:id" element={<h2>create_docter</h2>} />                                          
            <Route path="/create_docter" element={<h2>create_docter</h2>} />                                          
        </Routes>
    </div>)
}

export default Docter;