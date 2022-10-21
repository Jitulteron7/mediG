import React from "react"
import classes from "./mission.module.css";
import Card from "./cards";
import {data} from "./data";


const Mission =()=>{
    return(
    <div    className={classes.container}>
            {data.map((info,key)=>{
                <Card img={info.img} heading={info.heading} content={info.content} color={info.color}/>
            })}
    </div>)
}



export default Mission;