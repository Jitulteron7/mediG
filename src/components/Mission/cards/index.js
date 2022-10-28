import React from "react";
import classes from "./card.module.css";

const Cards = (props) => {
    const { img, heading, content, color } = props;

    return (<>
        <div className={classes.container} style={{ backgroundColor: `${color}` }}>
            <div className={classes.img_container}>
                <img src={img} />
            </div>
            <h1>{heading}</h1>
            <p>{content}</p>
        </div>
    </>);
}

export default Cards;
