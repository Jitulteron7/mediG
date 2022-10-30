import React from "react"
import classes from "./mission.module.css";
import Card from "./cards";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

export const data = [
    {
        img: img1,
        heading: "Reduce Hospitalization and rehospitalization",
        content: "Reduce Hospitalization and rehospitalization using various tools and ml model"
    },
    {
        img: img2,
        heading: "Digital Medical Records easy to access",
        content: "Digital Medical Records easy to access by patients and doctors for better analysis"
    },
    {
        img: img3,
        heading: "Access to health education and services",
        content: "Easy and efficent access to health education and health services"
    }
]


const Mission = () => {
    return (
        <div className={classes.container}>
            {data.map((info, key) => {
                return (<Card img={info.img} heading={info.heading} content={info.content} color={info.color} />)
            })}
        </div>)
}



export default Mission;