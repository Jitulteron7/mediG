import React from "react";
import classes from "./tabcontent.module.css";
const TabContent = (props)=>{
    const {heading,content,image}=props;

    return(
        <>
        <div className={classes.container}>
                <div className={classes.content}>
                    <h1>{heading}</h1>
                    <div>{content}</div>
                </div>
                <div>
                    <img src={image}/>
                </div>
        </div>
        </>)

}

export default TabContent;