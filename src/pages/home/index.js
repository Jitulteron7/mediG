import React, { useEffect } from "react";
import classes from "./home.module.css";
import MyButton from "../../components/MyButton";
import NumberContainer from "../../components/NumberContainer";
import TabComponent from "../../components/TabComponent";
import Services from "../../components/Services";
import Mission from "../../components/Mission"
import img1 from "../../assets/4.png";
import img2 from "../../assets/13.svg";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";

const Home = () => {

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.part1}>
                    <div className={classes.left}>
                        <div className={classes.head}>
                            <h2>Making healthcare easier</h2>
                            <h3>Decrease Repospitization rate</h3>
                        </div>
                        <div className={classes.head}>
                            <img src={img1} />
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.head}>
                            <img src={img2} />
                        </div>
                        <div className={classes.head}>
                            <p>A modern way to analyze healthcare data to improve the rehospitization rate and improve the user healthcare.</p>
                        </div>

                        <div className={classes.head}>
                            <MyButton color="#ff8214" text="Get Started" />
                        </div>
                    </div>
                </div>
                <div className={classes.part2}>
                    <div className={classes.numberContainer}>
                        <div style={{ backgroundColor: '#fff6ee', marginTop: '10px', width: '50%' }}>  <NumberContainer /></div>
                        <div className={classes.styleBox}>

                        </div>
                    </div>
                    <div className={classes.why}>
                        <h1>Why MediG ?</h1>
                        <TabComponent />
                    </div>
                    <div className={classes.services}>
                        <h1>Services we provide at MediG.</h1>
                        <Services />
                    </div>
                    <div className={classes.mission}>
                        <h1>Mission.</h1>
                        <Mission />
                    </div>
                </div>
            </div>
            <Footer />
        </>)
}


export default Home;