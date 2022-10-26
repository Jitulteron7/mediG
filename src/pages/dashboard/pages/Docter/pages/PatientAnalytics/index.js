import React from "react";
import TableDiv from "../../../../../../components/Table";
import classes from "./analytics.module.css";

const PatientAnalytics = () => {
    return (
        <div className={classes.container}>
            <h2>Patients Analysis</h2>
            <div className={classes.details}>
                <div className={classes.patient}>
                    <img src={"https://us.123rf.com/450wm/stockbroker/stockbroker1911/stockbroker191100880/134159963-studio-shot-of-mature-man-with-serious-expression-against-white-background-at-camera.jpg?ver=6"} />
                    <div className={classes.info}>
                        <ul>
                            <li>Name : Rocky John</li>
                            <li>Gender: Male</li>
                            <li>Age: Male</li>
                            <li>Desiease : Abc</li>
                            <li>Dr appointed : Dr ABD aaJ</li>
                            <li>Synmonts : KS</li>
                            <li>Date of admission:20/20/222</li>
                            <li>Days:60</li>
                            <li>Condition: <span className={classes.condition}></span></li>
                        </ul>
                        <div className={classes.upload}>
                            <input type={"file"} />
                        </div>
                    </div>
                </div>
                <div className={classes.analytics}>
                    <iframe src={"https://datastudio.google.com/embed/reporting/8dc4ec31-1b51-49a3-b253-40d3c9749f9e/page/ebF5C"} frameborder={0} style={{ border: 0, width: "100%", height: "100%" }} allowfullscreen />
                </div>
            </div>
            <div className={classes.prescription}>
            <h2>Patients Prescrition</h2>
                <iframe src=
                    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
                    frameborder={0} style={{ border: 0, width: "100%", height: "90vh" }} allowfullscreen 

                />
            </div>
        </div>

    )
}

export default PatientAnalytics;