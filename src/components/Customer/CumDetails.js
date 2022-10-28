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
             <p>Diclofenac</p>
            <p>To be taken <span>1 Times</span> A Day</p>
            <p>for 10 days</p></div>
            <div className="content">
            <p>Diclofenac</p>
            <p>To be taken <span>1 Times</span> A Day</p>
            <p>for 10 days</p>
            </div>
            <p>medicine</p>
            <CumMedicine/>
        </div>
        </>
    )
}

export default CumDetails
