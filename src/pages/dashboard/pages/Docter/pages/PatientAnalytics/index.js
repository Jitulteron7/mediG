import React, { useState } from "react";
import classes from "./analytics.module.css";
import { Circles } from "react-loader-spinner";

const PatientAnalytics = () => {

    const [ file, setFile ] = useState(null);
    const [ loading , setLoading ] = useState(false);
    const [ state , setState ] = useState(-1);

    const changeFile = (e) => {

        setFile(e.target.files[0]);
    }

    const uploadFile = () => {
        
        setLoading( true );

        setTimeout(() => {

            setLoading( false );
            setState( Math.floor(Math.random() * 3) );
        }, 3000);
    }

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
                            <li>Age: 52</li>
                            <li>Disease : Fever</li>
                            <li>Dr appointed : Dr ABD aaJ</li>
                            <li>Syntoms : high temparature, headache</li>
                            <li>Date of admission:20/20/222</li>
                            <li>Days:60</li>
                            <li>Condition: <span className={classes.condition}
                                style = {{ "backgroundColor" : state === 0 ? "red" : state === 1 ? "green" : state === 2 ? "yellow" : "#000000" } }
                            ></span></li>
                        </ul>
                        {
                            loading ? < Circles / > :
                            <div className={classes.upload}>
                                <input type={"file"} onChange={changeFile}/>
                                <button onClick={ uploadFile }>
                                   Upload!
                                </button>
                            </div>
                        }
                    </div>
                </div>
                <div className={classes.analytics}>
                    <iframe src={"https://datastudio.google.com/embed/reporting/0fdcb92d-7d2c-4de9-bc28-4e0aba207692/page/ebF5C"} frameborder={0} style={{ border: 0, width: "100%", height: "100%" }} allowfullscreen />
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