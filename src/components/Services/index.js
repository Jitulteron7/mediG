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
                text:"i need a doctor , i need a nurse"
        },
        {
                img: img2,
                header: "Greate Service",
                text:"i need a doctor , i need a nurse"
        },
        {
                img: img3,
                header: "Greate Service",
                text:"i need a doctor , i need a nurse"
        },
        {
                img: img4,
                header: "Greate Service",
                text:"i need a doctor , i need a nurse"
        }
]
const Services = () => {
        return (
                <div className={classes.container}>
                        {datas.map((info, key) => {
                                return (<Box
                                        className={classes.boxes}
                                        img={info.img}
                                        text={info.text}
                                        header={info.header}
                                />)
                        })}
                </div>)
}

export default Services;