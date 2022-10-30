import React from "react";
import classes from "./services.module.css";
import Box from "./Box";
import img1 from "../../assets/7.png"
import img2 from "../../assets/8.png"
import img3 from "../../assets/9.png"
import img4 from "../../assets/10.png"
import img5 from "../../assets/7.png"
import img6 from "../../assets/7.png"

const datas = [
        {
                img: img1,
                header: "Analytical and graphical tools",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
                img: img2,
                header: "Machine Learning Health Risk Prediction Model",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
                img: img3,
                header: "Digital Medical Records",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
                img: img4,
                header: "Scheduler and Management System",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
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