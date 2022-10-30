import React from "react";
import classes from "./mybtn.module.css";
import image from '../../assets/gif/anime_1.gif'
const MyButtom = (props)=>{
    const {color,text,click} = props;

    return (
            <>
                <button className={classes.container_big} style={{backgroundColor:`${color}`}} onClick={()=>{click()}}>
                    {text}
                </button>
            </>
    )
}

export default MyButtom;
