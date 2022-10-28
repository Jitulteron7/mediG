import React from "react";
import "./secondpage.css";
//import DetailsSec from "./CommonPage/secondPage";

import CumDetails from "../CumDetails";
import CumMedicine from "../cumMedecine";
import Calender from "../calender";
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

const DetailsSec=()=>{
    return(
        <>
    <div className="SecondPage">
        <div className="precription_validation">
              <div>
              Emergency
              </div>
        </div>
        <div className="user">
             <div className="photo"></div>
             <div className="content">
                        <p>Dr Namita Das</p>
                        <p>26</p>
                </div>

        </div>
        <nav className="sections">
           
            <div>
                <Link style={{textDecoration:"none", color:"white"}} to='/secondPage/customer/prescriptionDetails/details' >
                   Details 
                </Link>
            </div>
            <div>
                <Link style={{textDecoration:"none", color:"white"}} to='/secondPage/customer/prescriptionDetails/calender'>
                    Reminder
                </Link>
            </div>
            <div>
                <Link  style={{textDecoration:"none", color:"white"}} to='/secondPage/customer/prescriptionDetails/tools'>
                    Tools
                </Link>
            </div>
        </nav>
    </div>
   
    </>
    )
}

export default DetailsSec;