import React from "react";
import classes from "./card.module.css";

const Cards = (props)=>{
    const {img,heading,content,color} =props;
    
    return(<>
        <div   className={classes.container} style={{backgroundColor:`${color}`}}>
            <img/>
            <h1>Heading this is this</h1>
            <p>content is content  content is content 
            content is content 
            content is content 
            content is content 
            </p>
        </div>
    </>);
}

export default Cards;
