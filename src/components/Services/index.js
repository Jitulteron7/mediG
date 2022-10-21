import React from "react";
import classes from "./services.module.css";
import Box from "./Box";
import img1 from "../../assets/7.png"
import img2 from "../../assets/7.png"
import img3 from "../../assets/7.png"
import img4 from "../../assets/7.png"
import img5 from "../../assets/7.png"
import img6 from "../../assets/7.png"

const datas = [
        {
                img: img1,
                header: "Greate Service",
                text: "Download from our catalogue of 12487 acapellas, vocal samples & spoken word and start creating music today. We have male vocals, female acapellas, full songs or vocal hooks in a variety of tempos, genres and keys."
        },
        {
                img: img2,
                header: "Greate Service",
                text: "Download from our catalogue of 12487 acapellas, vocal samples & spoken word and start creating music today. We have male vocals, female acapellas, full songs or vocal hooks in a variety of tempos, genres and keys."
        },
        {
                img: img3,
                header: "Greate Service",
                text: "Download from our catalogue of 12487 acapellas, vocal samples & spoken word and start creating music today. We have male vocals, female acapellas, full songs or vocal hooks in a variety of tempos, genres and keys."
        }
]
const Services = () => {
        return (
                <div className={classes.container}>
                        {datas.map((info, key) => {
                                return (<Box
                                        img={info.img}
                                        text={info.text}
                                        header={info.header}
                                />)
                        })}
                </div>)
}

export default Services;