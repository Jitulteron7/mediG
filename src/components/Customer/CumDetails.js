import React from 'react'

import "./CumDetails.css"
import CumMedicine from './cumMedecine'
function CumDetails() {
    return (
      <>
         <div className="cumDetails"> 
            <div className="content">
            <p>Diclofenac</p>
            <p>To be taken <span>1 Times</span> A Day</p>
            <p>for 10 days</p>
            </div>
            <div className="content">
             <p>Diclofenac hydroxy</p>
            <p>To be taken <span>2 Times</span> A Day</p>
            <p>for 10 days</p></div>
            <div className="content">
            <p>paracetamol</p>
            <p>To be taken <span>3 Times</span> A Day</p>
            <p>for 5 days</p>
            </div>
            <p style={{fontSize:'1.2rem', fontWeight:'bold', width:'100%', margin:'20px auto'}}>medicines:</p>
            <CumMedicine/>
        </div>
        </>
    )
}

export default CumDetails
