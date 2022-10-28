import React from "react"
import classes from "./mission.module.css";
import Card from "./cards";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

export const data = [
    {
        img: img1,
        heading: "Text the mission",
        content: "This mission is abg kdhf asda qweqw"
    },
    {
        img: img2,
        heading: "Text the mission",
        content: "This mission is abg kdhf asda qweqw"
    },
    {
        img: img3,
        heading: "Text the mission",
        content: "This mission is abg kdhf asda qweqw"
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